import '../scss/style.scss';
import { localTeamIcon } from './local-team-icon-view.js';
import { sportsUrl, getDataUrl } from './const.js';
import { createGameElement } from './utils.js';
const sportsSelect = document.querySelector('#sport');
const oddsTableBody = document.querySelector('.odds-table__body');
const oddsFilterBtn = document.querySelector('#odds_filter');

// getting sports data for sport slect filter from API 

async function getSports(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        getSportsOptions(data.data);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// getting odds data for odds tabel from API

async function getOdds() {
    let currentSport = sportsSelect.value;
    let currentMarket = document.querySelector('#market').value;
    let currentRegion = document.querySelector('#region').value;
    let response = await fetch(getDataUrl(currentSport, currentRegion, currentMarket));
    let data = await response.json();
    console.log(data.data);
    buildTab(data.data, currentMarket);
}

// pushing sports options to the sport select

const getSportsOptions = (sports) => {
    sports.forEach((element) => {
        const sportOption = () => (`<option value="${element.key}">${element.title}</option>`);
        sportsSelect.append(createGameElement(sportOption()));
    });
};

// building one odd item
const oddItem = (market, element) => (`<div><span>${element}</span><span>${market[element]}</span></div>`);

// building odds list for one betting platform

const oddsItems = (market) =>
    Object.keys(market).length ? Object.keys(market).map((element) => oddItem(market, element)).join('') : '';

// getting an object with data of odds for particular market and particular platform

const getOddsResult = (data, market) => {
    let oddsResult = {};
    switch (market) {
        case 'h2h':
            oddsResult[1] = data.odds.h2h[0];
            oddsResult[2] = data.odds.h2h[1];
            if (Object.keys(data.odds).length > 1) {
                oddsResult[3] = data.odds.h2h_lay[0];
                oddsResult[4] = data.odds.h2h_lay[1];
            }
            break;
        case 'spreads':
            oddsResult[1] = data.odds.spreads.odds[0];
            oddsResult[2] = data.odds.spreads.odds[1];
            oddsResult[3] = data.odds.spreads.points[0];
            oddsResult[4] = data.odds.spreads.points[1];
            break;
        case 'totals':
            oddsResult[1] = data.odds.totals.odds[0];
            oddsResult[2] = data.odds.totals.odds[1];
            oddsResult[3] = data.odds.totals.points[0];
            oddsResult[4] = data.odds.totals.points[1];
            break;
    }

    return oddsResult;
}

// building a platform item

const gameOddsPlatformItem = (data, market) => {

    return (
        `<li class="odds-table__platfroms-item">
            <h6 class="odds-table__platfroms-item-title">${data.site_nice}</h6>
            <div class="odds-table__platfroms-item-game-odds">
                ${oddsItems(getOddsResult(data, market))}
            </div>
        </li>`
    );
};

// getting list of platforms for betting for a particular game

const gameOddsPlatforms = (data, market) =>
    data.length ? data.map((element) => gameOddsPlatformItem(element, market)).join('') : '';


// building a row of tab (game with it's betting platforms and odds)

const gameItem = (data, market) => (
    `<div class="odds-table__row">
        <div class="odds-table__teams">
        <div class="odds-table__teams-name">
            <span class="odds-table__teams-home-icon">${data.home_team === data.teams[0] ? localTeamIcon() : ''}</span>
            <span>${data.teams[0]}</span>
        </div>
        <span>vs</span>
        <div class="odds-table__teams-name">
            <span>${data.teams[1]}</span>
            <span class="odds-table__teams-home-icon">${data.home_team === data.teams[1] ? localTeamIcon() : ''}</span>
        </div>
        <span class="odds-table__game-date">December 15, 2020 - 6.00 pm</span>
        </div>
        <div class="odds-table__platforms">
        <ul class="odds-table__platfroms-list">${gameOddsPlatforms(data.sites, market)}</ul>
        </div>
    </div>`
);

// building the odds table

const buildTab = (games, market) => {
    games.forEach((game) => oddsTableBody.append(createGameElement(gameItem(game, market))));
};

// definition of queue of getting and pushing data

async function getData() {
    await getSports(sportsUrl);
    await getOdds();
}


// checking that container for the page is parced on the page

if (document.querySelector('#odds-table')) {

    getData();

    // listening of click event of the filter button and refilling table with fresh odds according filter data

    oddsFilterBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        oddsTableBody.innerHTML = '';
        getOdds();
    });
}
