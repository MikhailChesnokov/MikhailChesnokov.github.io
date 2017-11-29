var factors = {
	"Надежность":{
		"Устойчивость функционирования":{
			"Средства восстановления при ошибках на входе":	["Н0101","Н0102","Н0103","Н0104","Н0105","Н0106","Н0107","Н0108","Н0109","Н0110"],
			"Средства восстановления при сбоях оборудования": ["Н0201","Н0202","Н0203","Н0204","Н0205"],
			"Реализация управления средствами восстановления": ["Н0301","Н0302","Н0303","Н0304","Н0305"]
		},
		"Работоспособность":{
			"Функционирование в заданных режимах": ["Н0401"],
			"Обеспеение обработки заданного объема информации": ["Н0501","Н0502"]
		}
	},
	"Сопровождаемость": {
		"Простота конструкции":{
			"Простота архитектуры проекта":["С0101", "С0102"],
			"Сложность архитектуры проекта":["С0201"],
			"Межмодульные связи":["С0301", "С0302", "С0303", "С0304", "С030"],
			"Простота кодирования":["С1001", "С1002"]
		},
		"Наглядность":{
			"Зкспертиза принятой системы идентификации":[],
			"Комментарии логики программ проекта":["С0801", "С0802", "С0803"],
			"Оформление текста программы":[]
		},
		"Структурность":{
			"Использование основных логиеских структур":["С0601", "С0602", "С0603", "С0604"],
			"Соблюдение принципа нисходящего программирования":[],
			"Комментарии обоснования декомпозиции программ при кодировании":[]
		},
		"Повторяемость":{
			"Использование типовых компонентов ПС":[],
			"Использование типовых проектных решений":[]
		}
	},
	"Удобство применения": {
		"Легкость освоения":{
			"Освоение работы ПС":["У0101", "У0102", "У0103"],
			"Документация для освоения":["У0201", "У0202", "У0203"],
			"Полнота пользовательской документации":["У0301", "У0302"," У0303", "У0304", "У0306", "У0307", "У0308", "У0309", "У0310", "У0311", "У0312", "У0314", "У0315", "У0316"]
		},
		"Доступность эксплутационных программных документов":{
			"Точность пользовательской документации":["У0401", "У0402", "У0403", "У0404", "У0405", "У0406", "У0407", "У0408", "У0409", "У0410", "У0411", "У0412", "У0413"],
			"Понятность пользовательской документации":["У0502", "У0503", "У0504", "У0505", "У0506"],
			"Техническое исполнение пользовательской документации":["У0601", "У0602", "У0603", "У0604", "У0605", "У0606", "У0607", "У0608", "У0609"],
			"Прослеживание вариантов пользовательской документации":["У0701"]
		},
		"Удобство эксплуатации":{
			"Эксплуатация":["У0801", "У0802", "У0803", "У0804", "У0805"],
			"Управление меню":["У0901", "У0902"],
			"Функция HELP":["У1001", "У1001"],
			"Управление данными":["У1101", "У1101"],
			"Рабочие процедуры (JOBS)":["У1201", "У1201"]
		}
	},
	"Эффективность": {
		"Уровень автоматизации":{
			"Уровень автоматизации":["Э0101", "Э0102"," Э0103", "Э0104", "Э0105", "Э0106", "Э0107", "Э0108", "Э0109", "Э0110"]
		},
		"Временная эффективность":{
			"Временная эффективность":["Э0201", "Э0202"," Э0203", "Э0204", "Э0205", "Э0206"]
		},
		"Ресурсоемкость":{
			"Ресурсоемкость":["Э0301", "Э0302"," Э0303", "Э0304"]
		}
	},
	"Универсальность": {
		"Гибкость":{
			"Широта охвата функций":["Г0101", "Г0102"," Г0103", "Г0104", "Г0105"],
			"Простота архитектуры проекта":["Г0201", "Г0202"," Г0203", "Г0204", "Г0205", "Г0206"],
			"Сложность архитектуры проекта":["Г0301"],
			"Сложность структуры кода программ":["Г0401", "Г0402"," Г0403", "Г0404"],
			"Применение стандартных протоколов связи":["Г0501"],
			"Применение стандартных интерфейсных программ":["Г0601"]
		},
		"Мобильность":{
			"Зависимость от используемого комплекса технических средств":["Г0701", "Г0702"," Г0703", "Г0704"],
			"Зависимость от базоавого программного обеспечения":["Г0801", "Г0802"," Г0803"],
			"Изоляция немобильности":["Г0901"]
		},
		"Модифицируемость":{
			"Простота кодирования":["Г1001", "Г1002"," Г1003", "Г1004", "Г1005", "Г1006"],
			"Оценка можулей":["Г1007"],
			"Число комментариев":["Г1101"],
			"Качество комментариев":["Г1201", "Г1202"," Г1203", "Г1204", "Г1205", "Г1206", "Г1207", "Г1208"],
			"Использование описательных средств языка":["Г1301", "Г1302"," Г1303", "Г1304"],
			"Независимость модулей":["Г1401", "Г1402"," Г1403", "Г1404", "Г1405"]
		}
	},
	"Корректность": {
		"Полнота реализации":{
			"Полнота документации разработчика":["К0101", "К0102"," К0103", "К0104", "К0105", "К0106", "К0107", "К0108", "К0109", "К0110", "К0111", "К0112", "К0113", "К0114"],
			"Полнота программной документации":["К0201", "К0202"," К0203", "К0204", "К0205", "К0206", "К0207", "К0208", "К0209", "К0210"]
		},
		"Согласованность":{
			"Непротиворечивость документации":["К0301", "К0302"," К0303", "К0304", "К0305", "К0306", "К0307", "К0308", "К0309", "К0310", "К0311"],
			"Непротиворечивость программы":["К0401", "К0402"," К0403", "К0404", "К0405", "К0406", "К0407", "К0408", "К0409"],
			"Единообразие интерфейсов между модулями и пользователями":["К0501", "К0502"," К0503", "К0504", "К0505", "К0306"],
			"Единообразие кодирования и определения переменных":["К0601", "К0602"," К0603", "К0604", "К0605", "К0606"],
			"Соответствие документации стандартам":["К0701", "К0702"," К0703", "К0704", "К0705", "К0706"],
			"Соответствие ПС стандартам программирования":["К0801", "К0802"," К0803", "К0804", "К0805", "К0806"],
			"Соответствие ПС документации":[]
		},
		"Проверенность":{
			"Полнота тестирования проекта":["К1001", "К1002"," К1003", "К1004"]
		},
		"Логическая корректность":{
			"Реализация всех решений":[],
			"Отсутствие явных ошибок и достаточность реквизитов":[]
		}
	}
};
