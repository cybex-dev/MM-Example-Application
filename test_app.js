Module.register("test_app", {
    // Module config defaults.
    defaults: {
        count: 0
    },

    start: function() {
        console.log("======================================== Initializing Test-App ========================================");
        count = this.config.count;
        var self = this;
        setInterval(function () {
            console.log("Current Count : " + count);
            count++;
            self.updateDom();
        },1000)
    },

    getDom: function() {
        console.log("Updating DOM");
        var wrapper = document.createElement("div");
        wrapper.innerHTML = 'Hello world! [' + count + "]";
        return wrapper;
    }
});