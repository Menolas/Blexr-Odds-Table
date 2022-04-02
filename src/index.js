import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType('odds-table/odds-table', {

    title: 'Incert the odds table',
    category: 'common',
    icon: 'wordpress-alt',

    attributes: {},

    edit: function () {
        return <div>We are incerting here the table with odds</div>;
    },
    save: function () {
        return <section id="odds-table" class="odds-table">
            <div class="odds-filter">
                <form id="odds-filter" method="GET" action="" class="odds-filter__form">
                    <div class="odds-table-form__wrap">
                        <label for="sport">Sport</label>
                        <select id="sport"></select>
                    </div>
                    <div class="odds-table-form__wrap">
                        <label for="region">Region</label>
                        <select id="region">
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="eu">Europe</option>
                            <option value="us">United States</option>
                        </select>
                    </div>
                    <div class="odds-table-form__wrap">
                        <label for="market">Market</label>
                        <select id="market">
                            <option value="h2h">Head to head</option>
                            <option value="spreads">Handicaps</option>
                            <option value="totals">Over/Under</option>
                        </select>
                    </div>
                    <button id="odds_filter" type="submit">Filter</button>
                </form>
            </div>

            <div class="odds-table__body"></div>

        </section>;
    },
});
