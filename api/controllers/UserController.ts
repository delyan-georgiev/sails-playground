/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

import util = require('util');
import express = require('express');
declare const sails: any;
declare const User: any;
declare const Company: any;

export function index(req: any, res: any, next: Function): any {
  console.log('index() from TsController.ts');
  res.status(200).send('Hello from Typescript!');
}

export function getUser(req: any, res: any, next: Function): any {
  let p1 = User.findOne({id: req.params.id});
  let p2 = p1.populate('test', {where: {id:1}});
  let p3 =p2.populate('company')
  p3.then(function (x) {
      console.error(x.fgdgdgege());
      x.full_name = x.fullName();
      res.send(x);
    })
    .catch((err) => {
      res.send(err);
    });
}
/**
 * Delete user
 *
 * @param req
 * @param res
 * @param next
 *
 */
export function deleteUser(req: any, res: any, next: Function): any {
  console.error(req.params.id);
  User.destroy({id: req.params.id})
    .then(function () {
      res.ok();
    })
    .catch(function (err) {
      res.serverError(err);
    })
}

export function createUser(req: any, res: any, next: Function) {
  User.create({
    first_name: 'Delyan',
    last_name: 'Georgiev',
    state: 'pending',
  })
    .then(function (user) {
      sails.log('User Object', user);
      res.status(200).send(user);
    })
    .catch(function (err) {
      res.serverError(err)
    });
}

  export function createCompany(req: any, res: any, next: Function) {
  Company.create({
    name: 'Test company',
    owner: 1,
  })
    .then((company) => {
      res.send(company);
    })
    .catch((err) => {
      res.send(err);
    })
}
