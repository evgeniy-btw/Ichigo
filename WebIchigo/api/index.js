module.exports = {
    run: async function (req, res) {
        return res.status(200).json({
            message: "Этот API все еще находится на стадии beta, пожалуйста, сообщайте о любых ошибках, которые вы можете найти.",
            version: "0.0.1",
            endpoints: {
                "/api/logo": "Получите логотип бота или аватар в различных размерах.",
                "/api/test": "Просто проверка"
            }
        });
    }
}