const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const fs = require("fs");
const dataA = getData();
const crypto = require("crypto");
exports.getAllController = (req, res) => {
  try {
    const search = req.query?.title?.trim().toLowerCase(); // Arama kriterini al
    const order = req.query?.order; // Sıralama kriteri

    let result = dataA;

    if (search) {
      // Arama işlemi
      result = result.filter((item) =>
        item.recipeName.toLowerCase().includes(search)
      );
    }

    if (order) {
      // Sıralama işlemi
      result = result.sort((a, b) =>
        order === "asc"
          ? a.recipeTime - b.recipeTime
          : b.recipeTime - a.recipeTime
      );
    }

    return res.status(200).json({
      message: "Liste başarıyla yüklendi.",
      result: result.length,
      recipes: result,
    });
  } catch (error) {
    console.error("Veri işleme sırasında hata:", error);
    return res.status(500).json({
      message: "Bir hata oluştu.",
      error: error.message,
    });
  }
};

exports.getRecipe = (req, res) => {
  const recipeId = req.params.id;
  console.log("Received ID:", recipeId);

  const recipe = dataA.find((i) => i.id == recipeId);

  if (!recipe) {
    return res.status(404).json({
      message: "Tarif bulunamadı",
    });
  }

  return res.status(200).json({
    message: "Aradığınız ürün bulundu",
    recipe: recipe,
  });
};
exports.newRecipe = (req, res) => {
  // Gelen veriyi kontrol etmek için log ekleyin

  const newRecipe = req.body;

  if (
    !newRecipe.recipeName ||
    !newRecipe.recipeTime ||
    !newRecipe.category ||
    !newRecipe.instruction ||
    !newRecipe.ingredients ||
    !newRecipe.image
  ) {
    return res.status(400).json({
      message: "Lütfen bütün değerleri tanımlayın",
    });
  }
  newRecipe.id = crypto.randomUUID();

  newRecipe.ingredients = newRecipe.ingredients.split(" ");
  const randomNumber = Math.floor(Math.random() * 10) - 1;
  newRecipe.image = `https://picsum.photos/42${randomNumber}`;
  dataA.push(newRecipe);

  setData(dataA);
  // Geri kalan işlemler...
  res.status(200).json({
    message: "Yeni tarif olusturuldu",
    recipe: dataA,
  });
  console.log("Gelen Veri:", dataA);
};
exports.deleteRecipe = (req, res) => {
  //datayi al
  let result = dataA;
  //id yi al
  const recipeId = req.params.id;
  console.log("Received ID:", recipeId);

  //datayi filtrele
  const recipe = result.filter((i) => i.id !== recipeId);
  //data yi güncelle
  setData(recipe);
  //responsu gonder
  res.status(200).json({
    message: "Yeni tarif olusturuldu",
    recipe: recipe,
  });
  console.log("silindi");
};
