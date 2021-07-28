const resolvers = {
  Query: {
    users: async () => {
      return [
        {
          id: 1,
          username: "test1",
          role: "ADMIN",
        },
        {
          id: 1,
          username: "test2",
          role: "STANDARD",
        },
      ];
    },
  },
};

export default resolvers;
