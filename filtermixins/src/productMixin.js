export const productMixin = {
    data() {
      return {
       
        products: ["Iphone", "Samsung", "Bphone", "Nokia", "Xiaomi", "Oppo"],
        filterProduct: ""
      };
    },
    computed:{
      filteredProducts(){
        return this.products.filter((element)=>{
          return element.match(this.filterProduct);
        });
      }
    },
    created(){
        console.log("created from mixin!");
    }
  };