angular.module("myApp", ['ui.bootstrap'])
.controller("compareController", function($scope, $modal) {
	$scope.modalArr = [];
	$scope.selected = {};
	$scope.dropDownFilterarr = [];
	//Values from the API, now hardcoded for the purposes
	$scope.productsValues = [{
			"tpl": 1100,
			"insurance_type": "comprehensive",
			"premium": 4516,
			"provider": {
				"en-ae": {
					"url_slug": "watania",
					"terms_conditions_url": "https:\/\/bnkn.us\/insurance-terms\/WataniaTerms.pdf",
					"image_url": "https:\/\/static4.bnkn.us.com\/ci\/providers\/watania.png",
					"name": "Watania",
					"description": "National Takaful Company (Watania) is a young and dynamic organization that came into being in 2011. Watania\u2019s General Takaful department is responsible for all classes of insurance other than Motor and Medical. Resourced with highly experienced staff, this department is dedicated to serve mainly the commercial insurance needs of the market. The department has developed a wide a range of products to cater to the requirement of business of all sizes and types in all the major sectors of the market. All the products are Shariah compliant.",
					"time_to_policy": 1,
					"product_name": "Watania Premium (Garage)"
				}
			},
			"excess": 1000,
			"currency": "AED",
			"id": "wataniapremium",
			"price_breakdown": {
				"modifiers": [{
					"terms": {
						"starts_at": "2017-01-01T00:00:00.000+0000",
						"product": "ALL",
						"code": "",
						"name": "Ramadan extended",
						"ends_at": "2017-12-12T00:00:00.000+0000",
						"type": "discountPercentage",
						"value": "0.06"
					},
					"category": "voucher"
				}],
				"base": 4805
			},
			"covers": [{
					"name": "personalAccidentForDriver",
					"options": [{
						"cost": 120
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "dentRepair",
					"type": "excluded"
				},
				{
					"name": "replacementLocksCovered",
					"type": "excluded"
				},
				{
					"name": "thirdPartyPropertyDamage",
					"options": [{
						"text": "Up to AED 2M"
					}],
					"type": "included"
				},
				{
					"name": "omanExtension",
					"options": [{
						"cost": 1000
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "lossOrDamageToVehicleCovered",
					"type": "included"
				},
				{
					"name": "valetParkingTheftCover",
					"type": "excluded"
				},
				{
					"name": "thirdPartyBodilyInjuryCovered",
					"options": [{
						"text": "Unlimited"
					}],
					"type": "included"
				},
				{
					"name": "agencyRepair",
					"type": "excluded"
				},
				{
					"name": "lossOfPersonalEffects",
					"type": "excluded"
				},
				{
					"name": "emergencyMedicalExpenses",
					"options": [{
						"text": "Up to AED 2,000"
					}],
					"type": "included"
				},
				{
					"name": "personalAccidentForPassenger",
					"options": [{
							"cost": 150
						},
						{
							"text": "Family and Friends included"
						}
					],
					"type": "excluded",
					"selected": false
				},
				{
					"name": "ambulanceFees",
					"type": "included"
				},
				{
					"name": "naturalCalamityCovered",
					"type": "excluded"
				},
				{
					"name": "autoGapInsurance",
					"type": "excluded"
				},
				{
					"name": "riotOrStrikesCovered",
					"type": "excluded"
				},
				{
					"name": "gccCovered",
					"type": "excluded"
				},
				{
					"name": "involuntaryEmploymentLoss",
					"type": "excluded"
				},
				{
					"name": "carRental",
					"options": [{
						"cost": 200
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "windScreenDamage",
					"options": [{
						"text": "Up to AED 3,000"
					}],
					"type": "included"
				},
				{
					"name": "noExcessForWindscreenDamage",
					"type": "included"
				},
				{
					"name": "roadsideAssistance",
					"type": "included"
				},
				{
					"name": "fireAndTheftCovered",
					"type": "included"
				},
				{
					"name": "protectedNoClaimsDiscount",
					"type": "excluded"
				},
				{
					"name": "offroadCovered",
					"type": "excluded"
				},
				{
					"name": "freeCarRegistrationService",
					"type": "included"
				}
			],
			"own_damage": 3705
		},
		{
			"tpl": 1100,
			"insurance_type": "comprehensive",
			"premium": 5943,
			"provider": {
				"en-ae": {
					"url_slug": "watania",
					"terms_conditions_url": "https:\/\/static4.bnkn.us\/insurance-terms\/WataniaTerms.pdf",
					"image_url": "https:\/\/static4.bnkn.us\/ci\/providers\/watania.png",
					"name": "Watania",
					"description": "National Takaful Company (Watania) is a young and dynamic organization that came into being in 2011. Watania\u2019s General Takaful department is responsible for all classes of insurance other than Motor and Medical. Resourced with highly experienced staff, this department is dedicated to serve mainly the commercial insurance needs of the market. The department has developed a wide a range of products to cater to the requirement of business of all sizes and types in all the major sectors of the market. All the products are Shariah compliant.",
					"time_to_policy": 1,
					"product_name": "Watania Agency"
				}
			},
			"excess": 1000,
			"currency": "AED",
			"id": "wataniaagency",
			"price_breakdown": {
				"modifiers": [{
					"terms": {
						"starts_at": "2017-01-01T00:00:00.000+0000",
						"product": "ALL",
						"code": "",
						"name": "Ramadan extended",
						"ends_at": "2017-12-12T00:00:00.000+0000",
						"type": "discountPercentage",
						"value": "0.06"
					},
					"category": "voucher"
				}],
				"base": 6322
			},
			"covers": [{
					"name": "personalAccidentForDriver",
					"options": [{
						"cost": 120
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "dentRepair",
					"type": "excluded"
				},
				{
					"name": "replacementLocksCovered",
					"type": "excluded"
				},
				{
					"name": "thirdPartyPropertyDamage",
					"options": [{
						"text": "Up to AED 2M"
					}],
					"type": "included"
				},
				{
					"name": "omanExtension",
					"options": [{
						"cost": 1000
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "lossOrDamageToVehicleCovered",
					"type": "included"
				},
				{
					"name": "valetParkingTheftCover",
					"type": "excluded"
				},
				{
					"name": "thirdPartyBodilyInjuryCovered",
					"options": [{
						"text": "Unlimited"
					}],
					"type": "included"
				},
				{
					"name": "agencyRepair",
					"type": "included"
				},
				{
					"name": "lossOfPersonalEffects",
					"type": "excluded"
				},
				{
					"name": "emergencyMedicalExpenses",
					"options": [{
						"text": "Up to AED 2,000"
					}],
					"type": "included"
				},
				{
					"name": "personalAccidentForPassenger",
					"options": [{
							"cost": 150
						},
						{
							"text": "Family and Friends included"
						}
					],
					"type": "excluded",
					"selected": false
				},
				{
					"name": "ambulanceFees",
					"type": "included"
				},
				{
					"name": "naturalCalamityCovered",
					"type": "excluded"
				},
				{
					"name": "autoGapInsurance",
					"type": "included"
				},
				{
					"name": "riotOrStrikesCovered",
					"type": "excluded"
				},
				{
					"name": "gccCovered",
					"type": "excluded"
				},
				{
					"name": "involuntaryEmploymentLoss",
					"type": "excluded"
				},
				{
					"name": "carRental",
					"options": [{
						"cost": 200
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "windScreenDamage",
					"options": [{
						"text": "Up to AED 3,000"
					}],
					"type": "included"
				},
				{
					"name": "noExcessForWindscreenDamage",
					"type": "included"
				},
				{
					"name": "roadsideAssistance",
					"type": "included"
				},
				{
					"name": "fireAndTheftCovered",
					"type": "included"
				},
				{
					"name": "protectedNoClaimsDiscount",
					"type": "excluded"
				},
				{
					"name": "offroadCovered",
					"type": "excluded"
				},
				{
					"name": "freeCarRegistrationService",
					"type": "included"
				}
			],
			"own_damage": 5222
		},
		{
			"tpl": 1100,
			"insurance_type": "comprehensive",
			"premium": 3506,
			"provider": {
				"en-ae": {
					"url_slug": "watania",
					"terms_conditions_url": "https:\/\/static4.bnkn.us\/insurance-terms\/WataniaTerms.pdf",
					"image_url": "https:\/\/static4.bnkn.us\/ci\/providers\/watania.png",
					"name": "Watania",
					"description": "National Takaful Company (Watania) is a young and dynamic organization that came into being in 2011. Watania\u2019s General Takaful department is responsible for all classes of insurance other than Motor and Medical. Resourced with highly experienced staff, this department is dedicated to serve mainly the commercial insurance needs of the market. The department has developed a wide a range of products to cater to the requirement of business of all sizes and types in all the major sectors of the market. All the products are Shariah compliant.",
					"time_to_policy": 1,
					"product_name": "Watania Garage"
				}
			},
			"excess": 1000,
			"currency": "AED",
			"id": "wataniagarage",
			"price_breakdown": {
				"modifiers": [{
					"terms": {
						"starts_at": "2017-01-01T00:00:00.000+0000",
						"product": "ALL",
						"code": "",
						"name": "Ramadan extended",
						"ends_at": "2017-12-12T00:00:00.000+0000",
						"type": "discountPercentage",
						"value": "0.06"
					},
					"category": "voucher"
				}],
				"base": 3730
			},
			"covers": [{
					"name": "personalAccidentForDriver",
					"options": [{
						"cost": 120
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "dentRepair",
					"type": "excluded"
				},
				{
					"name": "replacementLocksCovered",
					"type": "excluded"
				},
				{
					"name": "thirdPartyPropertyDamage",
					"options": [{
						"text": "Up to AED 2M"
					}],
					"type": "included"
				},
				{
					"name": "omanExtension",
					"options": [{
						"cost": 1000
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "lossOrDamageToVehicleCovered",
					"type": "included"
				},
				{
					"name": "valetParkingTheftCover",
					"type": "excluded"
				},
				{
					"name": "thirdPartyBodilyInjuryCovered",
					"options": [{
						"text": "Unlimited"
					}],
					"type": "included"
				},
				{
					"name": "agencyRepair",
					"type": "excluded"
				},
				{
					"name": "lossOfPersonalEffects",
					"type": "excluded"
				},
				{
					"name": "emergencyMedicalExpenses",
					"options": [{
						"text": "Up to AED 2,000"
					}],
					"type": "included"
				},
				{
					"name": "personalAccidentForPassenger",
					"options": [{
							"cost": 150
						},
						{
							"text": "Family and Friends included"
						}
					],
					"type": "excluded",
					"selected": false
				},
				{
					"name": "ambulanceFees",
					"type": "included"
				},
				{
					"name": "naturalCalamityCovered",
					"type": "excluded"
				},
				{
					"name": "autoGapInsurance",
					"type": "excluded"
				},
				{
					"name": "riotOrStrikesCovered",
					"type": "excluded"
				},
				{
					"name": "gccCovered",
					"type": "excluded"
				},
				{
					"name": "involuntaryEmploymentLoss",
					"type": "excluded"
				},
				{
					"name": "carRental",
					"options": [{
						"cost": 200
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "windScreenDamage",
					"options": [{
						"text": "Up to AED 3,000"
					}],
					"type": "included"
				},
				{
					"name": "noExcessForWindscreenDamage",
					"type": "included"
				},
				{
					"name": "roadsideAssistance",
					"type": "included"
				},
				{
					"name": "fireAndTheftCovered",
					"type": "included"
				},
				{
					"name": "protectedNoClaimsDiscount",
					"type": "excluded"
				},
				{
					"name": "offroadCovered",
					"type": "excluded"
				},
				{
					"name": "freeCarRegistrationService",
					"type": "included"
				}
			],
			"own_damage": 2630
		},
		{
			"insurance_type": "comprehensive",
			"premium": 3566,
			"provider": {
				"en-ae": {
					"url_slug": "union",
					"terms_conditions_url": "https:\/\/static4.bnkn.us\/insurance-terms\/UnionTerms.pdf",
					"image_url": "https:\/\/static4.bnkn.us\/ci\/providers\/union-logo_19072017.png",
					"name": "Union",
					"description": "Established in 1998 and listed on the Abu Dhabi Securities Exchange, Union Insurance Company provides a wide range of individual and commercial insurance products to clients in the UAE and Middle East region. This includes both standard and customised policies that help individuals, small, medium and large enterprises as well as government entities obtain reliable, cost-effective insurance cover.",
					"time_to_policy": 24,
					"product_name": "Union Silver"
				}
			},
			"excess": 1000,
			"currency": "AED",
			"id": "unionsilver",
			"price_breakdown": {
				"modifiers": [{
					"terms": {
						"starts_at": "2017-01-01T00:00:00.000+0000",
						"product": "ALL",
						"code": "",
						"name": "Ramadan extended",
						"ends_at": "2017-12-12T00:00:00.000+0000",
						"type": "discountPercentage",
						"value": "0.06"
					},
					"category": "voucher"
				}],
				"base": 3793
			},
			"covers": [{
					"name": "personalAccidentForDriver",
					"options": [{
						"cost": 120
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "dentRepair",
					"type": "excluded"
				},
				{
					"name": "replacementLocksCovered",
					"type": "excluded"
				},
				{
					"name": "agencyRepair",
					"options": [{
						"cost": 506
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "thirdPartyPropertyDamage",
					"options": [{
						"text": "Up to AED 2M"
					}],
					"type": "included"
				},
				{
					"name": "lossOrDamageToVehicleCovered",
					"type": "included"
				},
				{
					"name": "valetParkingTheftCover",
					"type": "excluded"
				},
				{
					"name": "thirdPartyBodilyInjuryCovered",
					"options": [{
						"text": "Unlimited"
					}],
					"type": "included"
				},
				{
					"name": "lossOfPersonalEffects",
					"type": "excluded"
				},
				{
					"name": "omanExtension",
					"type": "excluded"
				},
				{
					"name": "involuntaryEmploymentLoss",
					"options": [{
						"text": "Up to AED 5,000"
					}],
					"type": "included"
				},
				{
					"name": "ambulanceFees",
					"type": "included"
				},
				{
					"name": "naturalCalamityCovered",
					"type": "included"
				},
				{
					"name": "autoGapInsurance",
					"type": "included"
				},
				{
					"name": "riotOrStrikesCovered",
					"type": "included"
				},
				{
					"name": "gccCovered",
					"type": "included"
				},
				{
					"name": "carRental",
					"options": [{
						"cost": 175
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "windScreenDamage",
					"type": "excluded"
				},
				{
					"name": "personalAccidentForPassenger",
					"options": [{
						"text": "Family Only"
					}],
					"type": "included"
				},
				{
					"name": "noExcessForWindscreenDamage",
					"type": "excluded"
				},
				{
					"name": "roadsideAssistance",
					"type": "included"
				},
				{
					"name": "fireAndTheftCovered",
					"type": "included"
				},
				{
					"name": "protectedNoClaimsDiscount",
					"type": "included"
				},
				{
					"name": "offroadCovered",
					"type": "excluded"
				},
				{
					"name": "emergencyMedicalExpenses",
					"type": "excluded"
				},
				{
					"name": "freeCarRegistrationService",
					"type": "excluded"
				}
			]
		},
		{
			"insurance_type": "comprehensive",
			"premium": 3744,
			"provider": {
				"en-ae": {
					"url_slug": "union",
					"terms_conditions_url": "https:\/\/static4.bnkn.us\/insurance-terms\/UnionTerms.pdf",
					"image_url": "https:\/\/static4.bnkn.us\/ci\/providers\/union-logo_19072017.png",
					"name": "Union",
					"description": "Established in 1998 and listed on the Abu Dhabi Securities Exchange, Union Insurance Company provides a wide range of individual and commercial insurance products to clients in the UAE and Middle East region. This includes both standard and customised policies that help individuals, small, medium and large enterprises as well as government entities obtain reliable, cost-effective insurance cover.",
					"time_to_policy": 24,
					"product_name": "Union Gold"
				}
			},
			"excess": 1000,
			"currency": "AED",
			"id": "uniongold",
			"price_breakdown": {
				"modifiers": [{
					"terms": {
						"starts_at": "2017-01-01T00:00:00.000+0000",
						"product": "ALL",
						"code": "",
						"name": "Ramadan extended",
						"ends_at": "2017-12-12T00:00:00.000+0000",
						"type": "discountPercentage",
						"value": "0.06"
					},
					"category": "voucher"
				}],
				"base": 3983
			},
			"covers": [{
					"name": "personalAccidentForDriver",
					"options": [{
						"cost": 120
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "gccCovered",
					"options": [{
						"text": "Oman and Qatar Only"
					}],
					"type": "included"
				},
				{
					"name": "dentRepair",
					"type": "included"
				},
				{
					"name": "replacementLocksCovered",
					"options": [{
						"text": "Up to AED 1,000"
					}],
					"type": "included"
				},
				{
					"name": "agencyRepair",
					"options": [{
						"cost": 443
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "thirdPartyPropertyDamage",
					"options": [{
						"text": "Up to AED 5M"
					}],
					"type": "included"
				},
				{
					"name": "lossOrDamageToVehicleCovered",
					"type": "included"
				},
				{
					"name": "valetParkingTheftCover",
					"type": "included"
				},
				{
					"name": "thirdPartyBodilyInjuryCovered",
					"options": [{
						"text": "Unlimited"
					}],
					"type": "included"
				},
				{
					"name": "lossOfPersonalEffects",
					"options": [{
						"text": "Up to AED 5,000"
					}],
					"type": "included"
				},
				{
					"name": "emergencyMedicalExpenses",
					"options": [{
						"text": "Up to AED 6,000"
					}],
					"type": "included"
				},
				{
					"name": "omanExtension",
					"type": "included"
				},
				{
					"name": "involuntaryEmploymentLoss",
					"options": [{
						"text": "Up to AED 5,000"
					}],
					"type": "included"
				},
				{
					"name": "ambulanceFees",
					"type": "included"
				},
				{
					"name": "naturalCalamityCovered",
					"type": "included"
				},
				{
					"name": "autoGapInsurance",
					"type": "included"
				},
				{
					"name": "riotOrStrikesCovered",
					"type": "included"
				},
				{
					"name": "carRental",
					"options": [{
						"cost": 175
					}],
					"type": "optional",
					"selected": false
				},
				{
					"name": "windScreenDamage",
					"type": "included"
				},
				{
					"name": "personalAccidentForPassenger",
					"options": [{
						"text": "Family Only"
					}],
					"type": "included"
				},
				{
					"name": "noExcessForWindscreenDamage",
					"type": "included"
				},
				{
					"name": "roadsideAssistance",
					"type": "included"
				},
				{
					"name": "fireAndTheftCovered",
					"type": "included"
				},
				{
					"name": "protectedNoClaimsDiscount",
					"type": "included"
				},
				{
					"name": "offroadCovered",
					"type": "excluded"
				},
				{
					"name": "freeCarRegistrationService",
					"type": "included"
				}
			]
		}
	]

	// Comparing the values selected from the checkbox
	$scope.compareValues = function() {
		$scope.resultArr = [];
		var getPremiumValue, getObjectVal;
		var keys = Object.keys($scope.selected);
		var len = keys.length;

		//Validating the selected values to compare
		if (len >= 3) {
			callAlert()
			return;
		} else if (len == 0) {
			callAlert()
			return;
		} else if (len == 1) {
			callAlert();
			return;
		} else {
			for (var i in $scope.productsValues) {
				getPremiumValue = $scope.productsValues[i].premium.toString();
				getObjectVal = keys.indexOf(getPremiumValue);
				if (getObjectVal > -1) {
					$scope.resultArr.push($scope.productsValues[i]);
				}
			}
		}
		$scope.selected = {};
		// The selected modal will be displayed in the modal, The covers are displayed
		$modal.open({
			templateUrl: 'modal.html',
			controller: 'ModalDialogController',
			scope: $scope,
			size: 'lg'
		});
	}
	$scope.tileTabsData = angular.copy($scope.productsValues);

	//Filtering the table according to the selection
	$scope.callFilter = function() {
		var pushVal;
		$scope.DDArr = [{
			name: 'Select'
		}];
		for (var y in $scope.productsValues) {
			var filterDDArr = {};
			pushVal = $scope.productsValues[y].provider['en-ae'].url_slug;
			if ($scope.dropDownFilterarr.indexOf(pushVal) > -1) {
				null;
			} else {
				$scope.dropDownFilterarr.push(pushVal);
				filterDDArr['name'] = pushVal;
				$scope.DDArr.push(filterDDArr);
			}
		}
	}

	//return the value accoding to the filter selection
	$scope.selectFilter = function(value) {
		var seletedFilter = value.name;
		if (seletedFilter == "Select") {
			$scope.tileTabsData = angular.copy($scope.productsValues);
		} else {
			$scope.tileTabsData = $scope.productsValues.filter(function(data) {
				return data.provider['en-ae'].url_slug == seletedFilter;
			});
		}
	}

	function callAlert() {
		alert("Please select any two values");
		$scope.selected = {};
	}

	$scope.callFilter();
})

.controller("ModalDialogController", function($scope, $modalInstance) {

	$scope.checkVal = function(value) {
		if (typeof(value) == 'object') {
			//Trying to show the cost
		} else {
			return true;
		}
	}
	$scope.ok = function() {
		$modalInstance.close();
	};
});