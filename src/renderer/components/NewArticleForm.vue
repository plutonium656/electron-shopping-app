<template>
  <form>
      <input type="text" placeholder="Article Name" v-model="newArticle.name">
      <input type="number" placeholder="Article Price" step="0.01" min="0.00" v-model="newArticle.price">
      <select v-model="newArticle.category">
          <option value="Food">Food</option>
          <option value="Drinks.25">Drinks( + .25€ )</option>
          <option value="Drinks.15">Drinks( + .15€ )</option>
          <option value="Household">Household</option>
      </select>
      <select v-model="newArticle.shop">
          <option value="Aldi">Aldi</option>
          <option value="Tegut">Tegut</option>
      </select>
      <button @click.prevent="submitArticle">Submit</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            newArticle:{
                name:'',
                category:'',
                price:'',
                shop:''
            }
        }
    },
    methods:{
        constructArticle(){

            let extraCost;
            let finArticle;
            let category;

            switch (this.newArticle.category){
                case "Drinks.25":
                extraCost = 0.25
                break
                
                case "Drinks.15":
                extraCost = 0.15
                break

                default:
                extraCost = 0
            }

            if(extraCost === 0){
                category = this.newArticle.category
            } else {
                category = "Drinks"
            }

            finArticle = {
                name:this.newArticle.name,
                category:category,
                price: Number.parseFloat(this.newArticle.price) + extraCost,
                shop: this.newArticle.shop
            }
            return finArticle
        },
        submitArticle(){
            console.log(this.constructArticle())
        }
    }
}
</script>

<style>

</style>
