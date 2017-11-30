var programClass;
var programStage;
	
$('#continueStartPage').click(function(evt) {
	//evt.preventDefault();
	programClass = $('#classSelector').val();
	programStage = $('#stageSelector').val();

    $('#mainHeader').css('display', 'none');
	$('#startPage').remove();
	$('#inputTablePage').css('display', 'block');
	fillTable();
});

$('#countValues').click(function(evt) {
    $('#inputTablePage').css('display', 'none');
    $('#marks').css('display', 'block');
    
    fillMarks()
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
		"<td><input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.5\" id=" + elementCode + "></td>" +
	"</tr>"
}

// Sorry for this s**t:
function fillMarks() {
    for (var factor in factors) {
        var criteriaSum = 0, criteriaAmount = 0;
        $('#factorListItem').append("<li>" + factor + ": " + formValueTag(factor) + formListTag(factor));
        for (var criterium in factors[factor]) {
            if (subclasses[criterium].indexOf(parseInt(programClass, 10)) !== -1) {
                var metricsSum = 0, metricsAmount = 0;
                $(createSelector(factor)).append("<li>" + criterium + ": " + formValueTag(criterium) + formListTag(criterium));
                for (var metrics in factors[factor][criterium]) {
                    if (phases[metrics].indexOf(programStage) !== -1) {
                        var elementsSum = 0, elementsAmount = 0;
                        for (var codeIndex in factors[factor][criterium][metrics]) {
                            var elementCode = factors[factor][criterium][metrics][codeIndex];
                            elementsSum += parseFloat($("#" + elementCode).val());
                            elementsAmount ++;
                        }
                        var totalMetric = parseFloat(elementsAmount) === 0 ? 0 : parseFloat(elementsSum) / parseFloat(elementsAmount);
                        metricsSum += totalMetric;
                        metricsAmount ++;
                        $(createSelector(criterium)).append("<li>" + metrics + ": <strong>" + totalMetric + "</strong></li>")
                    }
                }
                $(createSelector(factor)).append("</ol></li>");
                var totalCriteria = metricsAmount === 0 ? 0 : metricsSum / metricsAmount;
                criteriaSum += totalCriteria;
                criteriaAmount ++;
                $("#value_" + criterium.replace(/ /g,'_')).text(totalCriteria);
            }
        }
        $('#factorListItem').append("</ol></li>");
        var totalFactor = criteriaAmount === 0 ? 0 : criteriaSum / criteriaAmount;
        $("#value_" + factor.replace(/ /g,'_')).text(totalFactor);
    }
}

function createSelector(valueName) {
    return ("#" + valueName.replace(/ /g,'_'));
}

function formValueTag(valueName) {
    return ("<strong id=" + "value_" + valueName.replace(/ /g,'_') + "></strong>");
}
function formListTag(valueName) {
    return ("<ol id=" + valueName.replace(/ /g,'_') + ">");
}