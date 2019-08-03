

        var app = new Vue({
            el: '#app',
            data: {
                name: 'Husna',
                food_items : [ 'ban mian', 'fries', 'wanton' ]
            },
            methods: {
                buttonClick:  function(){ 
                    alert ('hey! I was clicked')
                },
                greet:function(){
                    alert ('Hi ' + this.name)
                }
            }
            
        });

