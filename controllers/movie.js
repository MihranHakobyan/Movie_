const {validationResult} = require('express-validator');
const MovieService = require('../services/movie');
const httpStatusCode = require('../libs/constants/http-Status-Codes');
const HttpException = require('http-exception');

class MovieController {
    static async getAll(req, res) {
        try {
            const data = await MovieService.getAll();
            res.send(data).status(httpStatusCode.Ok);
        } catch (err) {
            res.status(err.status).send(err.message);
        }
    }

    static async create(req, res) {
        try {
            const data = await MovieService.create(req.body);
            res.send(data).status(httpStatusCode.CREATED);
        }catch (err) {
            res.status(err.status).send(err.message);
        }
    }

    static async getById(req,res){
        try {
            const data = await MovieService.getById(req.params.id)
            if (!data){
                throw new HttpException(`movie by id ${req.params.id} dose not excist `,404)
            }

            res.send(data).status(httpStatusCode.CREATED);

        }catch (err) {
            res.status(err.status).send(err.message);
        }
    }
    static async remove(req,res){
        try{
            await MovieService.remove(req.params.id)
            res.status(200).send(`user by id ${req.params.id} deleted`)
        }catch (err){
            res.status(err.status).send(err.message);
        }
    }
}

module.exports = MovieController;