const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

if (!process.env.VERCEL) {
    const cronService = require('./services/cronService');
    cronService.startCron();
}
