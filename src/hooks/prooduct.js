// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data  } = context;
    if (!data.productName ) 
    {
      throw new Error ('A product must have a name ');
    }

    const { user } = context.params;

    context.data = { 
      productName:data.productName,
      productDescription:data.productDescription,
      userId : user._id,
    };
    return context;
  };
};
