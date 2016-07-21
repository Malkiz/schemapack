var tests = require('./tests');
// var schemapack = require('./schemapack');

tests.runTestSuite();
tests.runBenchmark(tests.playerSchema, tests.player);
tests.runBenchmark(tests.largeObjectSchema, tests.largeObject);
tests.runBenchmark(tests.complexArraySchema, tests.complexArray);
