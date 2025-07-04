sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.example.cv",
		defaults: {
			page: "ui5://test-resources/com/example/cv/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/example/cv/",
				never: "test-resources/com/example/cv/"
			},
			loader: {
				paths: {
					"com/example/cv": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.example.cv"
			},
			"integration/opaTests": {
				title: "Integration tests for com.example.cv"
			}
		}
	};
});
