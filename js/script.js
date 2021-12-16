const app = new Vue (
    {
        el: '#app',
        data: {
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg'
            ],
            count : 0
        },

        methods : {
            next: function() {
                this.count += 1;
                if (this.count > this.images.length - 1) {
                    this.count = 0;
                }
            },
            prev: function() {
                this.count += -1;
                if (this.count < 0) {
                    this.count = this.images.length - 1;
                }
            }
        }
    }
);