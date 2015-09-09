"use strict";
/* global describe, it */

const expect = require("chai").expect;
const fetch = require("../src/adapters/fetch");

describe("fetch adapters", function() {
  it("check", function() {
    let jsonCall = 0;
    const fetchApi = (url, opts)=> new Promise((resolve)=> {
      expect(url).to.eql("url");
      expect(opts).to.eql("opts");
      resolve({ json() {
        jsonCall++;
      }});
    });
    fetch(fetchApi)("url", "opts").then(()=> {
      expect(jsonCall).to.eql(1);
    });
  });
});
