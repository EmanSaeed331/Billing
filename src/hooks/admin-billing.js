// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data  } = context;
    if (!data ) 
    {
      throw new Error ('A billing details  must not be empty');
    }

    const { admin } = context.params;

    context.data = {
      adminId : admin._id,
    };
    
    return context;
  };
 
};
