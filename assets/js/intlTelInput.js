!(function (t) {
	'object' == typeof module && module.exports
		? (module.exports = t())
		: (window.intlTelInput = t())
})(function (c) {
	'use strict'
	return (function () {
		for (
			var a = [
					['Afghanistan (‫افغانستان‬‎)', 'af', '93'],
					['Albania (Shqipëri)', 'al', '355'],
					['Algeria (‫الجزائر‬‎)', 'dz', '213'],
					['American Samoa', 'as', '1', 5, ['684']],
					['Andorra', 'ad', '376'],
					['Angola', 'ao', '244'],
					['Anguilla', 'ai', '1', 6, ['264']],
					['Antigua and Barbuda', 'ag', '1', 7, ['268']],
					['Argentina', 'ar', '54'],
					['Armenia (Հայաստան)', 'am', '374'],
					['Aruba', 'aw', '297'],
					['Ascension Island', 'ac', '247'],
					['Australia', 'au', '61', 0],
					['Austria (Österreich)', 'at', '43'],
					['Azerbaijan (Azərbaycan)', 'az', '994'],
					['Bahamas', 'bs', '1', 8, ['242']],
					['Bahrain (‫البحرين‬‎)', 'bh', '973'],
					['Bangladesh (বাংলাদেশ)', 'bd', '880'],
					['Barbados', 'bb', '1', 9, ['246']],
					['Belarus (Беларусь)', 'by', '375'],
					['Belgium (België)', 'be', '32'],
					['Belize', 'bz', '501'],
					['Benin (Bénin)', 'bj', '229'],
					['Bermuda', 'bm', '1', 10, ['441']],
					['Bhutan (འབྲུག)', 'bt', '975'],
					['Bolivia', 'bo', '591'],
					['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'],
					['Botswana', 'bw', '267'],
					['Brazil (Brasil)', 'br', '55'],
					['British Indian Ocean Territory', 'io', '246'],
					['British Virgin Islands', 'vg', '1', 11, ['284']],
					['Brunei', 'bn', '673'],
					['Bulgaria (България)', 'bg', '359'],
					['Burkina Faso', 'bf', '226'],
					['Burundi (Uburundi)', 'bi', '257'],
					['Cambodia (កម្ពុជា)', 'kh', '855'],
					['Cameroon (Cameroun)', 'cm', '237'],
					[
						'Canada',
						'ca',
						'1',
						1,
						[
							'204',
							'226',
							'236',
							'249',
							'250',
							'289',
							'306',
							'343',
							'365',
							'387',
							'403',
							'416',
							'418',
							'431',
							'437',
							'438',
							'450',
							'506',
							'514',
							'519',
							'548',
							'579',
							'581',
							'587',
							'604',
							'613',
							'639',
							'647',
							'672',
							'705',
							'709',
							'742',
							'778',
							'780',
							'782',
							'807',
							'819',
							'825',
							'867',
							'873',
							'902',
							'905',
						],
					],
					['Cape Verde (Kabu Verdi)', 'cv', '238'],
					['Caribbean Netherlands', 'bq', '599', 1, ['3', '4', '7']],
					['Cayman Islands', 'ky', '1', 12, ['345']],
					['Central African Republic (République centrafricaine)', 'cf', '236'],
					['Chad (Tchad)', 'td', '235'],
					['Chile', 'cl', '56'],
					['China (中国)', 'cn', '86'],
					['Christmas Island', 'cx', '61', 2, ['89164']],
					['Cocos (Keeling) Islands', 'cc', '61', 1, ['89162']],
					['Colombia', 'co', '57'],
					['Comoros (‫جزر القمر‬‎)', 'km', '269'],
					['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'],
					['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'],
					['Cook Islands', 'ck', '682'],
					['Costa Rica', 'cr', '506'],
					['Côte d’Ivoire', 'ci', '225'],
					['Croatia (Hrvatska)', 'hr', '385'],
					['Cuba', 'cu', '53'],
					['Curaçao', 'cw', '599', 0],
					['Cyprus (Κύπρος)', 'cy', '357'],
					['Czech Republic (Česká republika)', 'cz', '420'],
					['Denmark (Danmark)', 'dk', '45'],
					['Djibouti', 'dj', '253'],
					['Dominica', 'dm', '1', 13, ['767']],
					[
						'Dominican Republic (República Dominicana)',
						'do',
						'1',
						2,
						['809', '829', '849'],
					],
					['Ecuador', 'ec', '593'],
					['Egypt (‫مصر‬‎)', 'eg', '20'],
					['El Salvador', 'sv', '503'],
					['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'],
					['Eritrea', 'er', '291'],
					['Estonia (Eesti)', 'ee', '372'],
					['Eswatini', 'sz', '268'],
					['Ethiopia', 'et', '251'],
					['Falkland Islands (Islas Malvinas)', 'fk', '500'],
					['Faroe Islands (Føroyar)', 'fo', '298'],
					['Fiji', 'fj', '679'],
					['Finland (Suomi)', 'fi', '358', 0],
					['France', 'fr', '33'],
					['French Guiana (Guyane française)', 'gf', '594'],
					['French Polynesia (Polynésie française)', 'pf', '689'],
					['Gabon', 'ga', '241'],
					['Gambia', 'gm', '220'],
					['Georgia (საქართველო)', 'ge', '995'],
					['Germany (Deutschland)', 'de', '49'],
					['Ghana (Gaana)', 'gh', '233'],
					['Gibraltar', 'gi', '350'],
					['Greece (Ελλάδα)', 'gr', '30'],
					['Greenland (Kalaallit Nunaat)', 'gl', '299'],
					['Grenada', 'gd', '1', 14, ['473']],
					['Guadeloupe', 'gp', '590', 0],
					['Guam', 'gu', '1', 15, ['671']],
					['Guatemala', 'gt', '502'],
					['Guernsey', 'gg', '44', 1, ['1481', '7781', '7839', '7911']],
					['Guinea (Guinée)', 'gn', '224'],
					['Guinea-Bissau (Guiné Bissau)', 'gw', '245'],
					['Guyana', 'gy', '592'],
					['Haiti', 'ht', '509'],
					['Honduras', 'hn', '504'],
					['Hong Kong (香港)', 'hk', '852'],
					['Hungary (Magyarország)', 'hu', '36'],
					['Iceland (Ísland)', 'is', '354'],
					['India (भारत)', 'in', '91'],
					['Indonesia', 'id', '62'],
					['Iran (‫ایران‬‎)', 'ir', '98'],
					['Iraq (‫العراق‬‎)', 'iq', '964'],
					['Ireland', 'ie', '353'],
					[
						'Isle of Man',
						'im',
						'44',
						2,
						['1624', '74576', '7524', '7924', '7624'],
					],
					['Israel (‫ישראל‬‎)', 'il', '972'],
					['Italy (Italia)', 'it', '39', 0],
					['Jamaica', 'jm', '1', 4, ['876', '658']],
					['Japan (日本)', 'jp', '81'],
					[
						'Jersey',
						'je',
						'44',
						3,
						['1534', '7509', '7700', '7797', '7829', '7937'],
					],
					['Jordan (‫الأردن‬‎)', 'jo', '962'],
					['Kazakhstan (Казахстан)', 'kz', '7', 1, ['33', '7']],
					['Kenya', 'ke', '254'],
					['Kiribati', 'ki', '686'],
					['Kosovo', 'xk', '383'],
					['Kuwait (‫الكويت‬‎)', 'kw', '965'],
					['Kyrgyzstan (Кыргызстан)', 'kg', '996'],
					['Laos (ລາວ)', 'la', '856'],
					['Latvia (Latvija)', 'lv', '371'],
					['Lebanon (‫لبنان‬‎)', 'lb', '961'],
					['Lesotho', 'ls', '266'],
					['Liberia', 'lr', '231'],
					['Libya (‫ليبيا‬‎)', 'ly', '218'],
					['Liechtenstein', 'li', '423'],
					['Lithuania (Lietuva)', 'lt', '370'],
					['Luxembourg', 'lu', '352'],
					['Macau (澳門)', 'mo', '853'],
					['Macedonia (FYROM) (Македонија)', 'mk', '389'],
					['Madagascar (Madagasikara)', 'mg', '261'],
					['Malawi', 'mw', '265'],
					['Malaysia', 'my', '60'],
					['Maldives', 'mv', '960'],
					['Mali', 'ml', '223'],
					['Malta', 'mt', '356'],
					['Marshall Islands', 'mh', '692'],
					['Martinique', 'mq', '596'],
					['Mauritania (‫موريتانيا‬‎)', 'mr', '222'],
					['Mauritius (Moris)', 'mu', '230'],
					['Mayotte', 'yt', '262', 1, ['269', '639']],
					['Mexico (México)', 'mx', '52'],
					['Micronesia', 'fm', '691'],
					['Moldova (Republica Moldova)', 'md', '373'],
					['Monaco', 'mc', '377'],
					['Mongolia (Монгол)', 'mn', '976'],
					['Montenegro (Crna Gora)', 'me', '382'],
					['Montserrat', 'ms', '1', 16, ['664']],
					['Morocco (‫المغرب‬‎)', 'ma', '212', 0],
					['Mozambique (Moçambique)', 'mz', '258'],
					['Myanmar (Burma) (မြန်မာ)', 'mm', '95'],
					['Namibia (Namibië)', 'na', '264'],
					['Nauru', 'nr', '674'],
					['Nepal (नेपाल)', 'np', '977'],
					['Netherlands (Nederland)', 'nl', '31'],
					['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'],
					['New Zealand', 'nz', '64'],
					['Nicaragua', 'ni', '505'],
					['Niger (Nijar)', 'ne', '227'],
					['Nigeria', 'ng', '234'],
					['Niue', 'nu', '683'],
					['Norfolk Island', 'nf', '672'],
					['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'],
					['Northern Mariana Islands', 'mp', '1', 17, ['670']],
					['Norway (Norge)', 'no', '47', 0],
					['Oman (‫عُمان‬‎)', 'om', '968'],
					['Pakistan (‫پاکستان‬‎)', 'pk', '92'],
					['Palau', 'pw', '680'],
					['Palestine (‫فلسطين‬‎)', 'ps', '970'],
					['Panama (Panamá)', 'pa', '507'],
					['Papua New Guinea', 'pg', '675'],
					['Paraguay', 'py', '595'],
					['Peru (Perú)', 'pe', '51'],
					['Philippines', 'ph', '63'],
					['Poland (Polska)', 'pl', '48'],
					['Portugal', 'pt', '351'],
					['Puerto Rico', 'pr', '1', 3, ['787', '939']],
					['Qatar (‫قطر‬‎)', 'qa', '974'],
					['Réunion (La Réunion)', 're', '262', 0],
					['Romania (România)', 'ro', '40'],
					['Russia (Россия)', 'ru', '7', 0],
					['Rwanda', 'rw', '250'],
					['Saint Barthélemy', 'bl', '590', 1],
					['Saint Helena', 'sh', '290'],
					['Saint Kitts and Nevis', 'kn', '1', 18, ['869']],
					['Saint Lucia', 'lc', '1', 19, ['758']],
					['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2],
					['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'],
					['Saint Vincent and the Grenadines', 'vc', '1', 20, ['784']],
					['Samoa', 'ws', '685'],
					['San Marino', 'sm', '378'],
					['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'],
					['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'],
					['Senegal (Sénégal)', 'sn', '221'],
					['Serbia (Србија)', 'rs', '381'],
					['Seychelles', 'sc', '248'],
					['Sierra Leone', 'sl', '232'],
					['Singapore', 'sg', '65'],
					['Sint Maarten', 'sx', '1', 21, ['721']],
					['Slovakia (Slovensko)', 'sk', '421'],
					['Slovenia (Slovenija)', 'si', '386'],
					['Solomon Islands', 'sb', '677'],
					['Somalia (Soomaaliya)', 'so', '252'],
					['South Africa', 'za', '27'],
					['South Korea (대한민국)', 'kr', '82'],
					['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'],
					['Spain (España)', 'es', '34'],
					['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'],
					['Sudan (‫السودان‬‎)', 'sd', '249'],
					['Suriname', 'sr', '597'],
					['Svalbard and Jan Mayen', 'sj', '47', 1, ['79']],
					['Sweden (Sverige)', 'se', '46'],
					['Switzerland (Schweiz)', 'ch', '41'],
					['Syria (‫سوريا‬‎)', 'sy', '963'],
					['Taiwan (台灣)', 'tw', '886'],
					['Tajikistan', 'tj', '992'],
					['Tanzania', 'tz', '255'],
					['Thailand (ไทย)', 'th', '66'],
					['Timor-Leste', 'tl', '670'],
					['Togo', 'tg', '228'],
					['Tokelau', 'tk', '690'],
					['Tonga', 'to', '676'],
					['Trinidad and Tobago', 'tt', '1', 22, ['868']],
					['Tunisia (‫تونس‬‎)', 'tn', '216'],
					['Turkey (Türkiye)', 'tr', '90'],
					['Turkmenistan', 'tm', '993'],
					['Turks and Caicos Islands', 'tc', '1', 23, ['649']],
					['Tuvalu', 'tv', '688'],
					['U.S. Virgin Islands', 'vi', '1', 24, ['340']],
					['Uganda', 'ug', '256'],
					['Ukraine (Україна)', 'ua', '380'],
					['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'],
					['United Kingdom', 'gb', '44', 0],
					['United States', 'us', '1', 0],
					['Uruguay', 'uy', '598'],
					['Uzbekistan (Oʻzbekiston)', 'uz', '998'],
					['Vanuatu', 'vu', '678'],
					['Vatican City (Città del Vaticano)', 'va', '39', 1, ['06698']],
					['Venezuela', 've', '58'],
					['Vietnam (Việt Nam)', 'vn', '84'],
					['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'],
					[
						'Western Sahara (‫الصحراء الغربية‬‎)',
						'eh',
						'212',
						1,
						['5288', '5289'],
					],
					['Yemen (‫اليمن‬‎)', 'ye', '967'],
					['Zambia', 'zm', '260'],
					['Zimbabwe', 'zw', '263'],
					['Åland Islands', 'ax', '358', 1, ['18']],
				],
				t = 0;
			t < a.length;
			t++
		) {
			var e = a[t]
			a[t] = {
				name: e[0],
				iso2: e[1],
				dialCode: e[2],
				priority: e[3] || 0,
				areaCodes: e[4] || null,
			}
		}
		function n(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i]
				;(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n)
			}
		}
		var i = {
			getInstance: function (t) {
				t = t.getAttribute('data-intl-tel-input-id')
				return window.intlTelInputGlobals.instances[t]
			},
			instances: {},
			documentReady: function () {
				return 'complete' === document.readyState
			},
		}
		'object' == typeof window && (window.intlTelInputGlobals = i)
		function s(e) {
			d(window.intlTelInputGlobals.instances, function (t) {
				window.intlTelInputGlobals.instances[t][e]()
			})
		}
		var r = 0,
			l = {
				allowDropdown: !0,
				autoHideDialCode: !0,
				autoPlaceholder: 'polite',
				customContainer: '',
				customPlaceholder: null,
				dropdownContainer: null,
				excludeCountries: [],
				formatOnDisplay: !0,
				geoIpLookup: null,
				hiddenInput: '',
				initialCountry: '',
				localizedCountries: null,
				nationalMode: !0,
				onlyCountries: [],
				placeholderNumberType: 'MOBILE',
				preferredCountries: ['us', 'gb'],
				separateDialCode: !1,
				utilsScript: '',
			},
			u = [
				'800',
				'822',
				'833',
				'844',
				'855',
				'866',
				'877',
				'880',
				'881',
				'882',
				'883',
				'884',
				'885',
				'886',
				'887',
				'888',
				'889',
			],
			d = function (t, e) {
				for (var i = Object.keys(t), n = 0; n < i.length; n++) e(i[n], t[i[n]])
			},
			o = (function () {
				function o(t, e) {
					var i = this
					!(function (t) {
						if (!(t instanceof o))
							throw new TypeError('Cannot call a class as a function')
					})(this),
						(this.id = r++),
						(this.telInput = t),
						(this.activeItem = null),
						(this.highlightedItem = null)
					var n = e || {}
					;(this.options = {}),
						d(l, function (t, e) {
							i.options[t] = n.hasOwnProperty(t) ? n[t] : e
						}),
						(this.hadInitialPlaceholder = Boolean(
							t.getAttribute('placeholder')
						))
				}
				var t, e, i
				return (
					(t = o),
					(e = [
						{
							key: '_init',
							value: function () {
								var t,
									e,
									i = this
								this.options.nationalMode &&
									(this.options.autoHideDialCode = !1),
									this.options.separateDialCode &&
										(this.options.autoHideDialCode = this.options.nationalMode =
											!1),
									(this.isMobile =
										/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
											navigator.userAgent
										)),
									this.isMobile &&
										(document.body.classList.add('iti-mobile'),
										this.options.dropdownContainer ||
											(this.options.dropdownContainer = document.body)),
									'undefined' != typeof Promise
										? ((t = new Promise(function (t, e) {
												;(i.resolveAutoCountryPromise = t),
													(i.rejectAutoCountryPromise = e)
										  })),
										  (e = new Promise(function (t, e) {
												;(i.resolveUtilsScriptPromise = t),
													(i.rejectUtilsScriptPromise = e)
										  })),
										  (this.promise = Promise.all([t, e])))
										: ((this.resolveAutoCountryPromise =
												this.rejectAutoCountryPromise =
													function () {}),
										  (this.resolveUtilsScriptPromise =
												this.rejectUtilsScriptPromise =
													function () {})),
									(this.selectedCountryData = {}),
									this._processCountryData(),
									this._generateMarkup(),
									this._setInitialState(),
									this._initListeners(),
									this._initRequests()
							},
						},
						{
							key: '_processCountryData',
							value: function () {
								this._processAllCountries(),
									this._processCountryCodes(),
									this._processPreferredCountries(),
									this.options.localizedCountries &&
										this._translateCountriesByLocale(),
									(this.options.onlyCountries.length ||
										this.options.localizedCountries) &&
										this.countries.sort(this._countryNameSort)
							},
						},
						{
							key: '_addCountryCode',
							value: function (t, e, i) {
								e.length > this.countryCodeMaxLen &&
									(this.countryCodeMaxLen = e.length),
									this.countryCodes.hasOwnProperty(e) ||
										(this.countryCodes[e] = [])
								for (var n = 0; n < this.countryCodes[e].length; n++)
									if (this.countryCodes[e][n] === t) return
								i = i !== c ? i : this.countryCodes[e].length
								this.countryCodes[e][i] = t
							},
						},
						{
							key: '_processAllCountries',
							value: function () {
								var e, i
								this.options.onlyCountries.length
									? ((e = this.options.onlyCountries.map(function (t) {
											return t.toLowerCase()
									  })),
									  (this.countries = a.filter(function (t) {
											return -1 < e.indexOf(t.iso2)
									  })))
									: this.options.excludeCountries.length
									? ((i = this.options.excludeCountries.map(function (t) {
											return t.toLowerCase()
									  })),
									  (this.countries = a.filter(function (t) {
											return -1 === i.indexOf(t.iso2)
									  })))
									: (this.countries = a)
							},
						},
						{
							key: '_translateCountriesByLocale',
							value: function () {
								for (var t = 0; t < this.countries.length; t++) {
									var e = this.countries[t].iso2.toLowerCase()
									this.options.localizedCountries.hasOwnProperty(e) &&
										(this.countries[t].name =
											this.options.localizedCountries[e])
								}
							},
						},
						{
							key: '_countryNameSort',
							value: function (t, e) {
								return t.name.localeCompare(e.name)
							},
						},
						{
							key: '_processCountryCodes',
							value: function () {
								;(this.countryCodeMaxLen = 0),
									(this.dialCodes = {}),
									(this.countryCodes = {})
								for (var t = 0; t < this.countries.length; t++) {
									var e = this.countries[t]
									this.dialCodes[e.dialCode] ||
										(this.dialCodes[e.dialCode] = !0),
										this._addCountryCode(e.iso2, e.dialCode, e.priority)
								}
								for (var i = 0; i < this.countries.length; i++) {
									var n = this.countries[i]
									if (n.areaCodes)
										for (
											var o = this.countryCodes[n.dialCode][0], a = 0;
											a < n.areaCodes.length;
											a++
										) {
											for (var s = n.areaCodes[a], r = 1; r < s.length; r++) {
												var l = n.dialCode + s.substr(0, r)
												this._addCountryCode(o, l),
													this._addCountryCode(n.iso2, l)
											}
											this._addCountryCode(n.iso2, n.dialCode + s)
										}
								}
							},
						},
						{
							key: '_processPreferredCountries',
							value: function () {
								this.preferredCountries = []
								for (
									var t = 0;
									t < this.options.preferredCountries.length;
									t++
								) {
									var e = this.options.preferredCountries[t].toLowerCase(),
										e = this._getCountryData(e, !1, !0)
									e && this.preferredCountries.push(e)
								}
							},
						},
						{
							key: '_createEl',
							value: function (t, e, i) {
								var n = document.createElement(t)
								return (
									e &&
										d(e, function (t, e) {
											return n.setAttribute(t, e)
										}),
									i && i.appendChild(n),
									n
								)
							},
						},
						{
							key: '_generateMarkup',
							value: function () {
								this.telInput.hasAttribute('autocomplete') ||
									(this.telInput.form &&
										this.telInput.form.hasAttribute('autocomplete')) ||
									this.telInput.setAttribute('autocomplete', 'off')
								var t = 'iti'
								this.options.allowDropdown && (t += ' iti--allow-dropdown'),
									this.options.separateDialCode &&
										(t += ' iti--separate-dial-code'),
									this.options.customContainer &&
										((t += ' '), (t += this.options.customContainer))
								var e,
									i,
									n = this._createEl('div', { class: t })
								this.telInput.parentNode.insertBefore(n, this.telInput),
									(this.flagsContainer = this._createEl(
										'div',
										{ class: 'iti__flag-container' },
										n
									)),
									n.appendChild(this.telInput),
									(this.selectedFlag = this._createEl(
										'div',
										{
											class: 'iti__selected-flag',
											role: 'combobox',
											'aria-controls': 'iti-'.concat(
												this.id,
												'__country-listbox'
											),
											'aria-owns': 'iti-'.concat(this.id, '__country-listbox'),
											'aria-expanded': 'false',
										},
										this.flagsContainer
									)),
									(this.selectedFlagInner = this._createEl(
										'div',
										{ class: 'iti__flag' },
										this.selectedFlag
									)),
									this.options.separateDialCode &&
										(this.selectedDialCode = this._createEl(
											'div',
											{ class: 'iti__selected-dial-code' },
											this.selectedFlag
										)),
									this.options.allowDropdown &&
										(this.selectedFlag.setAttribute('tabindex', '0'),
										(this.dropdownArrow = this._createEl(
											'div',
											{ class: 'iti__arrow' },
											this.selectedFlag
										)),
										(this.countryList = this._createEl('ul', {
											class: 'iti__country-list iti__hide',
											id: 'iti-'.concat(this.id, '__country-listbox'),
											role: 'listbox',
											'aria-label': 'List of countries',
										})),
										this.preferredCountries.length &&
											(this._appendListItems(
												this.preferredCountries,
												'iti__preferred',
												!0
											),
											this._createEl(
												'li',
												{
													class: 'iti__divider',
													role: 'separator',
													'aria-disabled': 'true',
												},
												this.countryList
											)),
										this._appendListItems(this.countries, 'iti__standard'),
										this.options.dropdownContainer
											? ((this.dropdown = this._createEl('div', {
													class: 'iti iti--container',
											  })),
											  this.dropdown.appendChild(this.countryList))
											: this.flagsContainer.appendChild(this.countryList)),
									this.options.hiddenInput &&
										((e = this.options.hiddenInput),
										!(i = this.telInput.getAttribute('name')) ||
											(-1 !== (t = i.lastIndexOf('[')) &&
												(e = ''.concat(i.substr(0, t), '[').concat(e, ']'))),
										(this.hiddenInput = this._createEl('input', {
											type: 'hidden',
											name: e,
										})),
										n.appendChild(this.hiddenInput))
							},
						},
						{
							key: '_appendListItems',
							value: function (t, e, i) {
								for (var n = '', o = 0; o < t.length; o++) {
									var a = t[o],
										s = i ? '-preferred' : ''
									;(n += "<li class='iti__country "
										.concat(e, "' tabIndex='-1' id='iti-")
										.concat(this.id, '__item-')
										.concat(a.iso2)
										.concat(s, "' role='option' data-dial-code='")
										.concat(a.dialCode, "' data-country-code='")
										.concat(a.iso2, "' aria-selected='false'>")),
										(n +=
											"<div class='iti__flag-box'><div class='iti__flag iti__".concat(
												a.iso2,
												"'></div></div>"
											)),
										(n += "<span class='iti__country-name'>".concat(
											a.name,
											'</span>'
										)),
										(n += "<span class='iti__dial-code'>+".concat(
											a.dialCode,
											'</span>'
										)),
										(n += '</li>')
								}
								this.countryList.insertAdjacentHTML('beforeend', n)
							},
						},
						{
							key: '_setInitialState',
							value: function () {
								var t = this.telInput.getAttribute('value'),
									e = this.telInput.value,
									i =
										t && '+' === t.charAt(0) && (!e || '+' !== e.charAt(0))
											? t
											: e,
									n = this._getDialCode(i),
									o = this._isRegionlessNanp(i),
									a = this.options,
									s = a.initialCountry,
									t = a.nationalMode,
									e = a.autoHideDialCode,
									a = a.separateDialCode
								n && !o
									? this._updateFlagFromNumber(i)
									: 'auto' !== s &&
									  (s
											? this._setFlag(s.toLowerCase())
											: n && o
											? this._setFlag('us')
											: ((this.defaultCountry = (
													this.preferredCountries.length
														? this.preferredCountries
														: this.countries
											  )[0].iso2),
											  i || this._setFlag(this.defaultCountry)),
									  i ||
											t ||
											e ||
											a ||
											(this.telInput.value = '+'.concat(
												this.selectedCountryData.dialCode
											))),
									i && this._updateValFromNumber(i)
							},
						},
						{
							key: '_initListeners',
							value: function () {
								this._initKeyListeners(),
									this.options.autoHideDialCode && this._initBlurListeners(),
									this.options.allowDropdown && this._initDropdownListeners(),
									this.hiddenInput && this._initHiddenInputListener()
							},
						},
						{
							key: '_initHiddenInputListener',
							value: function () {
								var t = this
								;(this._handleHiddenInputSubmit = function () {
									t.hiddenInput.value = t.getNumber()
								}),
									this.telInput.form &&
										this.telInput.form.addEventListener(
											'submit',
											this._handleHiddenInputSubmit
										)
							},
						},
						{
							key: '_getClosestLabel',
							value: function () {
								for (var t = this.telInput; t && 'LABEL' !== t.tagName; )
									t = t.parentNode
								return t
							},
						},
						{
							key: '_initDropdownListeners',
							value: function () {
								var e = this
								this._handleLabelClick = function (t) {
									e.countryList.classList.contains('iti__hide')
										? e.telInput.focus()
										: t.preventDefault()
								}
								var t = this._getClosestLabel()
								t && t.addEventListener('click', this._handleLabelClick),
									(this._handleClickSelectedFlag = function () {
										!e.countryList.classList.contains('iti__hide') ||
											e.telInput.disabled ||
											e.telInput.readOnly ||
											e._showDropdown()
									}),
									this.selectedFlag.addEventListener(
										'click',
										this._handleClickSelectedFlag
									),
									(this._handleFlagsContainerKeydown = function (t) {
										e.countryList.classList.contains('iti__hide') &&
											-1 !==
												[
													'ArrowUp',
													'Up',
													'ArrowDown',
													'Down',
													' ',
													'Enter',
												].indexOf(t.key) &&
											(t.preventDefault(),
											t.stopPropagation(),
											e._showDropdown()),
											'Tab' === t.key && e._closeDropdown()
									}),
									this.flagsContainer.addEventListener(
										'keydown',
										this._handleFlagsContainerKeydown
									)
							},
						},
						{
							key: '_initRequests',
							value: function () {
								var t = this
								this.options.utilsScript && !window.intlTelInputUtils
									? window.intlTelInputGlobals.documentReady()
										? window.intlTelInputGlobals.loadUtils(
												this.options.utilsScript
										  )
										: window.addEventListener('load', function () {
												window.intlTelInputGlobals.loadUtils(
													t.options.utilsScript
												)
										  })
									: this.resolveUtilsScriptPromise(),
									'auto' === this.options.initialCountry
										? this._loadAutoCountry()
										: this.resolveAutoCountryPromise()
							},
						},
						{
							key: '_loadAutoCountry',
							value: function () {
								window.intlTelInputGlobals.autoCountry
									? this.handleAutoCountry()
									: window.intlTelInputGlobals.startedLoadingAutoCountry ||
									  ((window.intlTelInputGlobals.startedLoadingAutoCountry =
											!0),
									  'function' == typeof this.options.geoIpLookup &&
											this.options.geoIpLookup(
												function (t) {
													;(window.intlTelInputGlobals.autoCountry =
														t.toLowerCase()),
														setTimeout(function () {
															return s('handleAutoCountry')
														})
												},
												function () {
													return s('rejectAutoCountryPromise')
												}
											))
							},
						},
						{
							key: '_initKeyListeners',
							value: function () {
								var t = this
								;(this._handleKeyupEvent = function () {
									t._updateFlagFromNumber(t.telInput.value) &&
										t._triggerCountryChange()
								}),
									this.telInput.addEventListener(
										'keyup',
										this._handleKeyupEvent
									),
									(this._handleClipboardEvent = function () {
										setTimeout(t._handleKeyupEvent)
									}),
									this.telInput.addEventListener(
										'cut',
										this._handleClipboardEvent
									),
									this.telInput.addEventListener(
										'paste',
										this._handleClipboardEvent
									)
							},
						},
						{
							key: '_cap',
							value: function (t) {
								var e = this.telInput.getAttribute('maxlength')
								return e && t.length > e ? t.substr(0, e) : t
							},
						},
						{
							key: '_initBlurListeners',
							value: function () {
								var t = this
								;(this._handleSubmitOrBlurEvent = function () {
									t._removeEmptyDialCode()
								}),
									this.telInput.form &&
										this.telInput.form.addEventListener(
											'submit',
											this._handleSubmitOrBlurEvent
										),
									this.telInput.addEventListener(
										'blur',
										this._handleSubmitOrBlurEvent
									)
							},
						},
						{
							key: '_removeEmptyDialCode',
							value: function () {
								var t
								'+' === this.telInput.value.charAt(0) &&
									(((t = this._getNumeric(this.telInput.value)) &&
										this.selectedCountryData.dialCode !== t) ||
										(this.telInput.value = ''))
							},
						},
						{
							key: '_getNumeric',
							value: function (t) {
								return t.replace(/\D/g, '')
							},
						},
						{
							key: '_trigger',
							value: function (t) {
								var e = document.createEvent('Event')
								e.initEvent(t, !0, !0), this.telInput.dispatchEvent(e)
							},
						},
						{
							key: '_showDropdown',
							value: function () {
								this.countryList.classList.remove('iti__hide'),
									this.selectedFlag.setAttribute('aria-expanded', 'true'),
									this._setDropdownPosition(),
									this.activeItem &&
										(this._highlightListItem(this.activeItem, !1),
										this._scrollTo(this.activeItem, !0)),
									this._bindDropdownListeners(),
									this.dropdownArrow.classList.add('iti__arrow--up'),
									this._trigger('open:countrydropdown')
							},
						},
						{
							key: '_toggleClass',
							value: function (t, e, i) {
								i && !t.classList.contains(e)
									? t.classList.add(e)
									: !i && t.classList.contains(e) && t.classList.remove(e)
							},
						},
						{
							key: '_setDropdownPosition',
							value: function () {
								var t,
									e,
									i,
									n,
									o,
									a = this
								this.options.dropdownContainer &&
									this.options.dropdownContainer.appendChild(this.dropdown),
									this.isMobile ||
										((t = this.telInput.getBoundingClientRect()),
										(e =
											window.pageYOffset || document.documentElement.scrollTop),
										(i = t.top + e),
										(o = this.countryList.offsetHeight),
										(n =
											i + this.telInput.offsetHeight + o <
											e + window.innerHeight),
										(o = e < i - o),
										this._toggleClass(
											this.countryList,
											'iti__country-list--dropup',
											!n && o
										),
										this.options.dropdownContainer &&
											((o = !n && o ? 0 : this.telInput.offsetHeight),
											(this.dropdown.style.top = ''.concat(i + o, 'px')),
											(this.dropdown.style.left = ''.concat(
												t.left + document.body.scrollLeft,
												'px'
											)),
											(this._handleWindowScroll = function () {
												return a._closeDropdown()
											}),
											window.addEventListener(
												'scroll',
												this._handleWindowScroll
											)))
							},
						},
						{
							key: '_getClosestListItem',
							value: function (t) {
								for (
									var e = t;
									e &&
									e !== this.countryList &&
									!e.classList.contains('iti__country');

								)
									e = e.parentNode
								return e === this.countryList ? null : e
							},
						},
						{
							key: '_bindDropdownListeners',
							value: function () {
								var e = this
								;(this._handleMouseoverCountryList = function (t) {
									t = e._getClosestListItem(t.target)
									t && e._highlightListItem(t, !1)
								}),
									this.countryList.addEventListener(
										'mouseover',
										this._handleMouseoverCountryList
									),
									(this._handleClickCountryList = function (t) {
										t = e._getClosestListItem(t.target)
										t && e._selectListItem(t)
									}),
									this.countryList.addEventListener(
										'click',
										this._handleClickCountryList
									)
								var t = !0
								;(this._handleClickOffToClose = function () {
									t || e._closeDropdown(), (t = !1)
								}),
									document.documentElement.addEventListener(
										'click',
										this._handleClickOffToClose
									)
								var i = '',
									n = null
								;(this._handleKeydownOnDropdown = function (t) {
									t.preventDefault(),
										'ArrowUp' === t.key ||
										'Up' === t.key ||
										'ArrowDown' === t.key ||
										'Down' === t.key
											? e._handleUpDownKey(t.key)
											: 'Enter' === t.key
											? e._handleEnterKey()
											: 'Escape' === t.key
											? e._closeDropdown()
											: /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) &&
											  (n && clearTimeout(n),
											  (i += t.key.toLowerCase()),
											  e._searchForCountry(i),
											  (n = setTimeout(function () {
													i = ''
											  }, 1e3)))
								}),
									document.addEventListener(
										'keydown',
										this._handleKeydownOnDropdown
									)
							},
						},
						{
							key: '_handleUpDownKey',
							value: function (t) {
								var e =
									'ArrowUp' === t || 'Up' === t
										? this.highlightedItem.previousElementSibling
										: this.highlightedItem.nextElementSibling
								e &&
									(e.classList.contains('iti__divider') &&
										(e =
											'ArrowUp' === t || 'Up' === t
												? e.previousElementSibling
												: e.nextElementSibling),
									this._highlightListItem(e, !0))
							},
						},
						{
							key: '_handleEnterKey',
							value: function () {
								this.highlightedItem &&
									this._selectListItem(this.highlightedItem)
							},
						},
						{
							key: '_searchForCountry',
							value: function (t) {
								for (var e = 0; e < this.countries.length; e++)
									if (this._startsWith(this.countries[e].name, t)) {
										var i = this.countryList.querySelector(
											'#iti-'
												.concat(this.id, '__item-')
												.concat(this.countries[e].iso2)
										)
										this._highlightListItem(i, !1), this._scrollTo(i, !0)
										break
									}
							},
						},
						{
							key: '_startsWith',
							value: function (t, e) {
								return t.substr(0, e.length).toLowerCase() === e
							},
						},
						{
							key: '_updateValFromNumber',
							value: function (t) {
								var e,
									i,
									n = t
								this.options.formatOnDisplay &&
									window.intlTelInputUtils &&
									this.selectedCountryData &&
									((e =
										!this.options.separateDialCode &&
										(this.options.nationalMode || '+' !== n.charAt(0))),
									(t = (i = intlTelInputUtils.numberFormat).NATIONAL),
									(i = i.INTERNATIONAL),
									(i = e ? t : i),
									(n = intlTelInputUtils.formatNumber(
										n,
										this.selectedCountryData.iso2,
										i
									))),
									(n = this._beforeSetNumber(n)),
									(this.telInput.value = n)
							},
						},
						{
							key: '_updateFlagFromNumber',
							value: function (t) {
								var e = t,
									i = this.selectedCountryData.dialCode,
									n = '1' === i
								e &&
									this.options.nationalMode &&
									n &&
									'+' !== e.charAt(0) &&
									('1' !== e.charAt(0) && (e = '1'.concat(e)),
									(e = '+'.concat(e))),
									this.options.separateDialCode &&
										i &&
										'+' !== e.charAt(0) &&
										(e = '+'.concat(i).concat(e))
								var t = this._getDialCode(e, !0),
									n = this._getNumeric(e),
									o = null
								if (t) {
									var a = this.countryCodes[this._getNumeric(t)],
										t =
											-1 !== a.indexOf(this.selectedCountryData.iso2) &&
											n.length <= t.length - 1
									if (!('1' === i && this._isRegionlessNanp(n)) && !t)
										for (var s = 0; s < a.length; s++)
											if (a[s]) {
												o = a[s]
												break
											}
								} else
									'+' === e.charAt(0) && n.length
										? (o = '')
										: (e && '+' !== e) || (o = this.defaultCountry)
								return null !== o && this._setFlag(o)
							},
						},
						{
							key: '_isRegionlessNanp',
							value: function (t) {
								t = this._getNumeric(t)
								if ('1' !== t.charAt(0)) return !1
								t = t.substr(1, 3)
								return -1 !== u.indexOf(t)
							},
						},
						{
							key: '_highlightListItem',
							value: function (t, e) {
								var i = this.highlightedItem
								i && i.classList.remove('iti__highlight'),
									(this.highlightedItem = t),
									this.highlightedItem.classList.add('iti__highlight'),
									e && this.highlightedItem.focus()
							},
						},
						{
							key: '_getCountryData',
							value: function (t, e, i) {
								for (var n = e ? a : this.countries, o = 0; o < n.length; o++)
									if (n[o].iso2 === t) return n[o]
								if (i) return null
								throw new Error("No country data for '".concat(t, "'"))
							},
						},
						{
							key: '_setFlag',
							value: function (t) {
								var e = this.selectedCountryData.iso2
									? this.selectedCountryData
									: {}
								;(this.selectedCountryData = t
									? this._getCountryData(t, !1, !1)
									: {}),
									this.selectedCountryData.iso2 &&
										(this.defaultCountry = this.selectedCountryData.iso2),
									this.selectedFlagInner.setAttribute(
										'class',
										'iti__flag iti__'.concat(t)
									)
								var i,
									n = t
										? ''
												.concat(this.selectedCountryData.name, ': +')
												.concat(this.selectedCountryData.dialCode)
										: 'Unknown'
								return (
									this.selectedFlag.setAttribute('title', n),
									this.options.separateDialCode &&
										((i = this.selectedCountryData.dialCode
											? '+'.concat(this.selectedCountryData.dialCode)
											: ''),
										(this.selectedDialCode.innerHTML = i),
										(i =
											this.selectedFlag.offsetWidth ||
											this._getHiddenSelectedFlagWidth()),
										(this.telInput.style.paddingLeft = ''.concat(i + 6, 'px'))),
									this._updatePlaceholder(),
									this.options.allowDropdown &&
										((i = this.activeItem) &&
											(i.classList.remove('iti__active'),
											i.setAttribute('aria-selected', 'false')),
										t &&
											((i =
												this.countryList.querySelector(
													'#iti-'
														.concat(this.id, '__item-')
														.concat(t, '-preferred')
												) ||
												this.countryList.querySelector(
													'#iti-'.concat(this.id, '__item-').concat(t)
												)).setAttribute('aria-selected', 'true'),
											i.classList.add('iti__active'),
											(this.activeItem = i),
											this.selectedFlag.setAttribute(
												'aria-activedescendant',
												i.getAttribute('id')
											))),
									e.iso2 !== t
								)
							},
						},
						{
							key: '_getHiddenSelectedFlagWidth',
							value: function () {
								var t = this.telInput.parentNode.cloneNode()
								;(t.style.visibility = 'hidden'), document.body.appendChild(t)
								var e = this.flagsContainer.cloneNode()
								t.appendChild(e)
								var i = this.selectedFlag.cloneNode(!0)
								e.appendChild(i)
								i = i.offsetWidth
								return t.parentNode.removeChild(t), i
							},
						},
						{
							key: '_updatePlaceholder',
							value: function () {
								var t =
									'aggressive' === this.options.autoPlaceholder ||
									(!this.hadInitialPlaceholder &&
										'polite' === this.options.autoPlaceholder)
								window.intlTelInputUtils &&
									t &&
									((t =
										intlTelInputUtils.numberType[
											this.options.placeholderNumberType
										]),
									(t = this.selectedCountryData.iso2
										? intlTelInputUtils.getExampleNumber(
												this.selectedCountryData.iso2,
												this.options.nationalMode,
												t
										  )
										: ''),
									(t = this._beforeSetNumber(t)),
									'function' == typeof this.options.customPlaceholder &&
										(t = this.options.customPlaceholder(
											t,
											this.selectedCountryData
										)),
									this.telInput.setAttribute('placeholder', t))
							},
						},
						{
							key: '_selectListItem',
							value: function (t) {
								var e = this._setFlag(t.getAttribute('data-country-code'))
								this._closeDropdown(),
									this._updateDialCode(t.getAttribute('data-dial-code'), !0),
									this.telInput.focus()
								t = this.telInput.value.length
								this.telInput.setSelectionRange(t, t),
									e && this._triggerCountryChange()
							},
						},
						{
							key: '_closeDropdown',
							value: function () {
								this.countryList.classList.add('iti__hide'),
									this.selectedFlag.setAttribute('aria-expanded', 'false'),
									this.dropdownArrow.classList.remove('iti__arrow--up'),
									document.removeEventListener(
										'keydown',
										this._handleKeydownOnDropdown
									),
									document.documentElement.removeEventListener(
										'click',
										this._handleClickOffToClose
									),
									this.countryList.removeEventListener(
										'mouseover',
										this._handleMouseoverCountryList
									),
									this.countryList.removeEventListener(
										'click',
										this._handleClickCountryList
									),
									this.options.dropdownContainer &&
										(this.isMobile ||
											window.removeEventListener(
												'scroll',
												this._handleWindowScroll
											),
										this.dropdown.parentNode &&
											this.dropdown.parentNode.removeChild(this.dropdown)),
									this._trigger('close:countrydropdown')
							},
						},
						{
							key: '_scrollTo',
							value: function (t, e) {
								var i = this.countryList,
									n = window.pageYOffset || document.documentElement.scrollTop,
									o = i.offsetHeight,
									a = i.getBoundingClientRect().top + n,
									s = a + o,
									r = t.offsetHeight,
									l = t.getBoundingClientRect().top + n,
									u = l + r,
									t = l - a + i.scrollTop,
									n = o / 2 - r / 2
								l < a
									? (e && (t -= n), (i.scrollTop = t))
									: s < u && (e && (t += n), (r = o - r), (i.scrollTop = t - r))
							},
						},
						{
							key: '_updateDialCode',
							value: function (t, e) {
								var i = this.telInput.value,
									t = '+'.concat(t)
								if ('+' === i.charAt(0))
									var n = this._getDialCode(i),
										n = n ? i.replace(n, t) : t
								else {
									if (
										this.options.nationalMode ||
										this.options.separateDialCode
									)
										return
									if (i) n = t + i
									else {
										if (!e && this.options.autoHideDialCode) return
										n = t
									}
								}
								this.telInput.value = n
							},
						},
						{
							key: '_getDialCode',
							value: function (t, e) {
								var i = ''
								if ('+' === t.charAt(0))
									for (var n = '', o = 0; o < t.length; o++) {
										var a = t.charAt(o)
										if (!isNaN(parseInt(a, 10))) {
											if (((n += a), e))
												this.countryCodes[n] && (i = t.substr(0, o + 1))
											else if (this.dialCodes[n]) {
												i = t.substr(0, o + 1)
												break
											}
											if (n.length === this.countryCodeMaxLen) break
										}
									}
								return i
							},
						},
						{
							key: '_getFullNumber',
							value: function () {
								var t = this.telInput.value.trim(),
									e = this.selectedCountryData.dialCode,
									i = this._getNumeric(t),
									e =
										this.options.separateDialCode &&
										'+' !== t.charAt(0) &&
										e &&
										i
											? '+'.concat(e)
											: ''
								return e + t
							},
						},
						{
							key: '_beforeSetNumber',
							value: function (t) {
								var e = t
								return (
									!this.options.separateDialCode ||
										((t = this._getDialCode(e)) &&
											((t =
												' ' ===
													e[
														(t = '+'.concat(this.selectedCountryData.dialCode))
															.length
													] || '-' === e[t.length]
													? t.length + 1
													: t.length),
											(e = e.substr(t)))),
									this._cap(e)
								)
							},
						},
						{
							key: '_triggerCountryChange',
							value: function () {
								this._trigger('countrychange')
							},
						},
						{
							key: 'handleAutoCountry',
							value: function () {
								'auto' === this.options.initialCountry &&
									((this.defaultCountry =
										window.intlTelInputGlobals.autoCountry),
									this.telInput.value || this.setCountry(this.defaultCountry),
									this.resolveAutoCountryPromise())
							},
						},
						{
							key: 'handleUtils',
							value: function () {
								window.intlTelInputUtils &&
									(this.telInput.value &&
										this._updateValFromNumber(this.telInput.value),
									this._updatePlaceholder()),
									this.resolveUtilsScriptPromise()
							},
						},
						{
							key: 'destroy',
							value: function () {
								var t,
									e = this.telInput.form
								this.options.allowDropdown &&
									(this._closeDropdown(),
									this.selectedFlag.removeEventListener(
										'click',
										this._handleClickSelectedFlag
									),
									this.flagsContainer.removeEventListener(
										'keydown',
										this._handleFlagsContainerKeydown
									),
									(t = this._getClosestLabel()) &&
										t.removeEventListener('click', this._handleLabelClick)),
									this.hiddenInput &&
										e &&
										e.removeEventListener(
											'submit',
											this._handleHiddenInputSubmit
										),
									this.options.autoHideDialCode &&
										(e &&
											e.removeEventListener(
												'submit',
												this._handleSubmitOrBlurEvent
											),
										this.telInput.removeEventListener(
											'blur',
											this._handleSubmitOrBlurEvent
										)),
									this.telInput.removeEventListener(
										'keyup',
										this._handleKeyupEvent
									),
									this.telInput.removeEventListener(
										'cut',
										this._handleClipboardEvent
									),
									this.telInput.removeEventListener(
										'paste',
										this._handleClipboardEvent
									),
									this.telInput.removeAttribute('data-intl-tel-input-id')
								e = this.telInput.parentNode
								e.parentNode.insertBefore(this.telInput, e),
									e.parentNode.removeChild(e),
									delete window.intlTelInputGlobals.instances[this.id]
							},
						},
						{
							key: 'getExtension',
							value: function () {
								return window.intlTelInputUtils
									? intlTelInputUtils.getExtension(
											this._getFullNumber(),
											this.selectedCountryData.iso2
									  )
									: ''
							},
						},
						{
							key: 'getNumber',
							value: function (t) {
								if (window.intlTelInputUtils) {
									var e = this.selectedCountryData.iso2
									return intlTelInputUtils.formatNumber(
										this._getFullNumber(),
										e,
										t
									)
								}
								return ''
							},
						},
						{
							key: 'getNumberType',
							value: function () {
								return window.intlTelInputUtils
									? intlTelInputUtils.getNumberType(
											this._getFullNumber(),
											this.selectedCountryData.iso2
									  )
									: -99
							},
						},
						{
							key: 'getSelectedCountryData',
							value: function () {
								return this.selectedCountryData
							},
						},
						{
							key: 'getValidationError',
							value: function () {
								if (window.intlTelInputUtils) {
									var t = this.selectedCountryData.iso2
									return intlTelInputUtils.getValidationError(
										this._getFullNumber(),
										t
									)
								}
								return -99
							},
						},
						{
							key: 'isValidNumber',
							value: function () {
								var t = this._getFullNumber().trim(),
									e = this.options.nationalMode
										? this.selectedCountryData.iso2
										: ''
								return window.intlTelInputUtils
									? intlTelInputUtils.isValidNumber(t, e)
									: null
							},
						},
						{
							key: 'setCountry',
							value: function (t) {
								t = t.toLowerCase()
								this.selectedFlagInner.classList.contains('iti__'.concat(t)) ||
									(this._setFlag(t),
									this._updateDialCode(this.selectedCountryData.dialCode, !1),
									this._triggerCountryChange())
							},
						},
						{
							key: 'setNumber',
							value: function (t) {
								var e = this._updateFlagFromNumber(t)
								this._updateValFromNumber(t), e && this._triggerCountryChange()
							},
						},
						{
							key: 'setPlaceholderNumberType',
							value: function (t) {
								;(this.options.placeholderNumberType = t),
									this._updatePlaceholder()
							},
						},
					]) && n(t.prototype, e),
					i && n(t, i),
					o
				)
			})()
		i.getCountryData = function () {
			return a
		}
		function h(t, e, i) {
			var n = document.createElement('script')
			;(n.onload = function () {
				s('handleUtils'), e && e()
			}),
				(n.onerror = function () {
					s('rejectUtilsScriptPromise'), i && i()
				}),
				(n.className = 'iti-load-utils'),
				(n.async = !0),
				(n.src = t),
				document.body.appendChild(n)
		}
		return (
			(i.loadUtils = function (i) {
				if (
					!window.intlTelInputUtils &&
					!window.intlTelInputGlobals.startedLoadingUtilsScript
				) {
					if (
						((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
						'undefined' != typeof Promise)
					)
						return new Promise(function (t, e) {
							return h(i, t, e)
						})
					h(i)
				}
				return null
			}),
			(i.defaults = l),
			(i.version = '17.0.13'),
			function (t, e) {
				e = new o(t, e)
				return (
					e._init(),
					t.setAttribute('data-intl-tel-input-id', e.id),
					(window.intlTelInputGlobals.instances[e.id] = e)
				)
			}
		)
	})()
})
