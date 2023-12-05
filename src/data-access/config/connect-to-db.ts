import mongo from "mongoose";
export const connectDb = () => {
  const connectionString=process.env.MONGO_CONNECTION_STRING as string
  console.log(connectionString,'MONGO_CONNECTION_STRING')
  mongo
    .connect(
      connectionString ,{}
    )
    .then((res) => {
      console.log("mongodb connected successfully");
    })
    .catch((err) => {
      console.log(err, "-->");
    });
};
