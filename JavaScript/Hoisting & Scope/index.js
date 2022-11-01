function main() {
    function createCountModule(initialCount) {
        let _count = initialCount;

        function incrementCount() {
            _count += 1;
        }

        // return { count: () => _count, incrementCount };
        return { count: _count, incrementCount };
    }

    const countModule = createCountModule(0);

    setInterval(() => {
        countModule.incrementCount();
        // console.log(countModule.count());
        console.log(countModule);
    }, 1000);
}

main();