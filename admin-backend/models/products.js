class Product {
    constructor(id, productName, brand, item_type, price, weightOrVolume, ingredients, nutrition, healthStat){
        this.id = id;
        this.productName = productName;
        this.brand = brand;
        this.item_type = item_type;
        this.price = price;
        this.weightOrVoluem = weightOrVolume;
        this.ingreduents = ingredients;
        this.nutrition = nutrition;
        this.healthStat = healthStat;
    }
}
module.exports = Product;