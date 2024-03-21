import Product from "../models/productModel";

export const getAllProducts = async (req: any, res: any) => {
  try {
    const data = await Product.find();

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addProduct = async (req: any, res: any) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        todo: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Fetch a single product using a similar approach to above
// const singleTodo = await Todo.findById(req.params.id); 
export const singleProduct = async (req: any, res: any) => {
  try {
    const singleProduct = await Product.findById(req.params.id); 

    res.status(200).json({
      status: "success",
      data: {
        todo: singleProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// edit
// export const editProduct = async (req: any, res: any) => {
//   try {
//     const editProduct = await Product.findByIdAndUpdate(req.params.id, req.body); 

//     res.status(200).json({
//       status: "success",
//       data: {
//         product: editProduct,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

//delete
export const deleteProduct = async (req: any, res: any) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id); 

    res.status(204).json({
      status: "success",
      data: {
        product: deleteProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};