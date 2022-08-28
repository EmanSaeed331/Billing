// billings-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { default: mongoose } = require('mongoose');

module.exports = function (app) {
  const modelName = 'billings';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    invoiceNumber: { type: Number, required: true },
    userId:{type:mongoose.Schema.Types.ObjectId},
    bill_amount:{type:Number, required: true},
    stats:{type:String , required:true},
    reviewed_by:{type:String }

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
