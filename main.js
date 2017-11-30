var programClass;
var programStage;
	
$('#continueStartPage').click(function(evt) {
	programClass = $('#classSelector').val();
	programStage = $('#stageSelector').val();

    $('#mainHeader').css('display', 'none');
	$('#startPage').css('display', 'none');
	$('#inputTablePage').css('display', 'block');
	fillTable();
});

$('#countValues').click(function(evt) {
    $('#inputTablePage').css('display', 'none');
    $('#coefficients').css('display', 'block');

});

$('#countCoefficients').click(function(evt) {
    $('#coefficients').css('display', 'none');
    $('#marks').css('display', 'block');
    calculateCoefficients();
    fillMarks();
});

function fillTable() {
	for (var factor in factors) {
		for (var criterium in factors[factor]) {
			if (subclasses[criterium].indexOf(parseInt(programClass, 10)) !== -1) {
				for (var metrics in factors[factor][criterium]) {
					if (phases[metrics].indexOf(programStage) !== -1) {
						for (var codeIndex in factors[factor][criterium][metrics]) {
							var elementCode = factors[factor][criterium][metrics][codeIndex];
							var elementName = elements[elementCode];
							$('#inputTableBody').append(constructTableRow(elementCode, elementName));
						}
					}
				}
			}
		}
	}
}

function constructTableRow(elementCode, elementName) {
	return "" +
	"<tr>" +
		"<td>" + elementCode + "</td>" +
		"<td>" + elementName + "</td>" +
		"<td>" + 
        ((countable.indexOf(elementCode) === -1) ? ("<input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.5\" id=" + elementCode + ">") :
            ("<input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.0\" disabled id=" + elementCode + ">")) + 
        "</td>" +
	"</tr>"
}

// Sorry for this s**t:
function fillMarks() {
    for (var factor in factors) {
        var criteriaSum = 0, criteriaAmount = 0;
        $('#factorListItem').append(createOpenListTag(factor));
        for (var criterium in factors[factor]) {
            if (subclasses[criterium].indexOf(parseInt(programClass, 10)) !== -1) {
                var metricsSum = 0, metricsAmount = 0;
                $(createSelector(factor)).append(createOpenListTag(criterium));
                for (var metrics in factors[factor][criterium]) {
                    if (phases[metrics].indexOf(programStage) !== -1) {
                        var elementsSum = 0, elementsAmount = 0;
                        for (var codeIndex in factors[factor][criterium][metrics]) {
                            var elementCode = factors[factor][criterium][metrics][codeIndex];
                            elementsSum += parseFloat($("#" + elementCode).val());
                            elementsAmount ++;
                        }
                        var totalMetric = calculateAverage(elementsSum, elementsAmount);
                        metricsSum += parseFloat(totalMetric);
                        metricsAmount ++;
                        $(createSelector(criterium)).append("<li>" + metrics + ": <strong>" + totalMetric + "</strong></li>");
                    }
                }
                $(createSelector(factor)).append("</ol></li>");
                if (parseInt(metricsAmount) >= 1) {
                    var totalCriteria = calculateAverage(metricsSum, metricsAmount);
                    criteriaSum += parseFloat(totalCriteria);
                    criteriaAmount ++;
                    $(createValueSelector(criterium)).text(totalCriteria);
                } else {
                    $(createValueSelector(criterium)).parent().remove();
                }
            }
        }
        $('#factorListItem').append("</ol></li>");
        var totalFactor = calculateAverage(criteriaSum, criteriaAmount);
        if (parseInt(criteriaAmount) >= 1) {
            $(createValueSelector(factor)).text(totalFactor);
        } else {
            $(createValueSelector(factor)).parent().remove();
        }
    }
}

function createOpenListTag(valueName) {
    return "<li>" + valueName + ": " + formValueTag(valueName) + formListTag(valueName);
}

function calculateAverage(sum, amount) {
    return (parseFloat(amount) === 0 ? 0 : (parseFloat(sum) / parseFloat(amount))).toFixed(2);
}

function createValueSelector(valueName) {
    return createSelector("value_" + valueName);
}

function createSelector(valueName) {
    return "#" + valueName.replace(/ /g,'_');
}

function formValueTag(valueName) {
    return "<strong id=" + "value_" + valueName.replace(/ /g,'_') + "></strong>";
}

function formListTag(valueName) {
    return "<ol id=" + valueName.replace(/ /g,'_') + ">";
}

function calculateCoefficients() {
    $("#Н0305").val(1 - parseInt($("#param2").val()) / parseInt($("#param1").val()));
    $("#Н0401").val(1 - parseInt($("#param3").val()) / parseInt($("#param4").val()));
    $("#Н0501").val(parseFloat($("#param5").val()) / parseFloat($("#param6").val()));
    $("#Н0502").val(parseFloat($("#param7").val()) / parseFloat($("#param8").val()));
    $("#С0302").val(1 / ((parseFloat($("#param9").val()) + 1 ) *  (parseFloat($("#param10").val() + 1))));
    $("#С1002").val(1 - parseFloat($("#param11").val()) / parseFloat($("#param12").val()));
    $("#К1003").val( parseInt($("#param13").val()) / parseInt($("#param14").val()));
    $("#К1004").val( parseInt($("#param15").val()) / parseInt($("#param16").val()));
}