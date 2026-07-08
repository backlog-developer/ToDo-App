const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

/**Now that we have created zod types and how do we export this file is below:-  */

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};

/**
   { for 1st endpoint
     title: string,
     description: string,
   }
   
   {2nd endpoint
     
   }

   {3rd endpoint
     id: string,
   }
 */
