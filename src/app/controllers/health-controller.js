class HealthController {
    index(req, res) {
        const responseData = 'pong';

        res.status(200).json({ responseData: responseData });
    }   
}

export default new HealthController();