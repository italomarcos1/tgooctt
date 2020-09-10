module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postcodes',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
