const student = {
    name: "seju",
    marks: 98,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent scope
        return this.marks;
    },

};