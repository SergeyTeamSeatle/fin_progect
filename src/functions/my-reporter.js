const Mocha = require('mocha');
const {
    EVENT_RUN_BEGIN,
    EVENT_RUN_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
    EVENT_SUITE_BEGIN,
    EVENT_SUITE_END
} = Mocha.Runner.constants;


class MyReporter {
    constructor(runner) {
        this._indents = 0;
        const stats = runner.stats;

        runner
            .once(EVENT_RUN_BEGIN, () => {
                console.log('start test');

            })
            .on(EVENT_SUITE_BEGIN, () => {
                this.increaseIndent();
            })
            .on(EVENT_SUITE_END, () => {
                this.decreaseIndent();
            })
            .on(EVENT_TEST_PASS, test => {
                console.log(`${this.indent()}pass: ${test.fullTitle()}`);
            })
            .on(EVENT_TEST_FAIL, (test, err) => {
                console.log(
                    `${this.indent()}fail: ${test.fullTitle()} - error: ${err.message}`

                );
            })
            .once(EVENT_RUN_END, () => {
                console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);
            });
    }

    indent() {
        return Array(this._indents).join('  ');
    }

    increaseIndent() {
        this._indents++;
    }

    decreaseIndent() {
        this._indents--;
    }
}

module.exports = MyReporter;