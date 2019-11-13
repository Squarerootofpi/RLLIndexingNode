/*global axios */
/*global Vue */
var app = new Vue({
    el: '#app',
    data: {
        ImageId: '',
        name1: '',
        name2: '',
        name3: '',
        inputBox: '',
        url: "http://cs.creatorof.jsearch.org:4201/",

    },
    created: function () {
        this.newIndex();
    },
    computed: {
        // sortedComments() {
        //     return this.comments.sort((a, b) => {
        //         var rval = 0;
        //         if (a.upvotes < b.upvotes) {
        //             rval = 1;
        //         } else if (a.upvotes > b.upvotes) {
        //             rval = -1;
        //         }
        //         return (rval);
        //     })
        // }

    },
    methods: {
        custIndex() {
            console.log("in SendIndex");
            axios.post(this.url + 'index', {
                ImageId: this.ImageId,
                UserInput: this.inputBox,
            })
            this.newIndex();
        },
        Index_1() {
            console.log('name 1')
            axios.post(this.url + 'index', {
                ImageId: this.ImageId,
                UserInput: this.name1,
            })
            this.newIndex();
        },
        Index_2() {
            console.log('name 2')
            axios.post(this.url + 'index', {
                ImageId: this.ImageId,
                UserInput: this.name2,
            })
            this.newIndex();
        },
        Index_3() {
            console.log('name 3')
            axios.post(this.url + 'index', {
                ImageId: this.ImageId,
                UserInput: this.name3,
            })
            this.newIndex();
        },
        async newIndex() {
            console.log("in getIndex");
            var url = "http://cs.creatorof.jsearch.org:4201/getIndex";
            try {
                let response = await axios.get(url);
                this.data = response.data; // Assign array to returned response
                console.log(this.data);
                return true;
            }
            catch (error) {
                console.log(error);
            }
        }

        // addComment() {
        //     var url = "http://cs.creatorof.jsearch.org:4201/comments";
        //     axios.post(url, {
        //         title: this.newComment,
        //         upvotes: 0
        //     })
        //         .then(response => {
        //             console.log("Post Response ");
        //             console.log(response.data);
        //             this.comments.push(response.data);
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        //     console.log(this.comments);
        //     this.newComment = "";
        // },
        // incrementUpvotes(item) {
        //     var url = "http://cs.creatorof.jsearch.org:4201/comments/" + item._id + "/upvote";
        //     axios.put(url)
        //         .then(response => {
        //             console.log(response.data.upvotes);
        //             item.upvotes = response.data.upvotes;
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        //     console.log("URL " + url);
        // },
        // async getall() {
        //     console.log("get all");
        //     var url = "http://cs.creatorof.jsearch.org:4201/comments"; // This is the route we set up in index.js
        //     try {
        //         let response = await axios.get(url);
        //         this.comments = response.data; // Assign array to returned response
        //         console.log(this.comments);
        //         return true;
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // },
    }
});