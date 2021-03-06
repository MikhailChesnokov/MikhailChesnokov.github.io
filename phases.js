var phases = {
	"Средства восстановления при ошибках на входе":	["analysis", "design", "implementation", "testing", "release", "support"],
	"Средства восстановления при сбоях оборудования": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Реализация управления средствами восстановления":["design", "implementation", "testing", "release", "support"],
	"Функционирование в заданных режимах": ["implementation", "testing", "release", "support"],
	"Обеспеение обработки заданного объема информации":["implementation", "testing", "release", "support"],
	"Простота архитектуры проекта ПС": ["analysis", "design", "support"],
	"Сложность архитектуры проекта": ["design", "implementation", "testing", "release", "support"],
	"Межмодульные связи": ["design"],
	"Простота кодирования": ["design", "implementation", "testing", "release"],
	"Зкспертиза принятой системы идентификации": ["implementation", "testing", "release", "support"],
	"Комментарии логики программ проекта": ["implementation", "testing", "release", "support"],
	"Оформление текста программы": ["implementation", "testing", "release", "support"],
	"Использование основных логических структур": ["implementation", "testing", "release", "support"],
	"Соблюдение принципа нисходящего программирования": ["implementation", "testing", "release", "support"],
	"Комментарии обоснования декомпозиции программ при кодировании": ["implementation", "testing", "release", "support"],
	"Использование типовых компонентов ПС": ["analysis", "design"],
	"Использование типовых проектных решений": ["design"],
	"Освоение работы ПС": ["release", "support"],
	"Документация для освоения": ["release", "support"],
	"Полнота пользовательской документации": ["implementation", "testing", "release", "support"],
	"Точность пользовательской документации": ["implementation", "testing", "release", "support"],
	"Понятность пользовательской документации": ["implementation", "testing", "release", "support"],
	"Техническое исполнение пользовательской документации": ["implementation", "testing", "release", "support"],
	"Прослеживание вариантов пользовательской документации": ["implementation", "testing", "release", "support"],
	"Эксплуатация": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Управление меню": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Функция HELP": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Управление данными": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Рабочие процедуры (JOBS)": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Уровень автоматизации": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Временная эффективность": ["analysis", "implementation", "testing", "release", "support"],
	"Ресурсоемкость": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Широта охвата функций": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Простота архитектуры проекта": ["design", "implementation", "testing", "release", "support"],
	"Сложность архитектуры проекта": ["design", "implementation", "testing", "release", "support"],
	"Сложность структуры кода программ": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Применение стандартных протоколов связи": ["implementation", "testing", "release", "support"],
	"Применение стандартных интерфейсных программ": ["implementation", "testing", "release", "support"],
	"Зависимость от используемого комплекса технических средств": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Зависимость от базоавого программного обеспечения": ["analysis", "implementation", "testing", "release", "support"],
	"Изоляция немобильности": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Простота кодирования": ["implementation", "testing", "release", "support"],
	"Число комментариев": ["implementation", "testing", "release", "support"],
	"Качество комментариев": ["implementation", "testing", "release", "support"],
	"Использование описательных средств языка": ["implementation", "testing", "release", "support"],
	"Независимость модулей": ["implementation", "testing", "release", "support"],
	"Полнота документации разработчика": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Полнота программной документации": ["implementation", "testing", "release", "support"],
	"Непротиворечивость документации": ["design", "implementation", "testing", "release", "support"],
	"Непротиворечивость программы": ["implementation", "testing", "release"],
	"Единообразие интерфейсов между модулями и пользователями": ["analysis", "design", "implementation", "testing", "release"],
	"Единообразие кодирования и определения переменных": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Соответствие документации стандартам": ["design", "implementation", "testing", "release"],
	"Соответствие ПС стандартам программирования": ["analysis", "implementation", "testing", "release", "support"],
	"Соответствие ПС документации": ["implementation", "testing", "release", "support"],
	"Полнота тестирования проекта": ["analysis", "implementation", "testing", "release"],
	"Реализация всех решений": ["analysis", "design", "implementation", "testing", "release", "support"],
	"Отсутствие явных ошибок и достаточность реквизитов": ["implementation", "testing", "release", "support"]
};
