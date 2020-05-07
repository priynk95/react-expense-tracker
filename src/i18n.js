import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            "transaction":"transaction",
            "transactions":"Transactions",
            "balance": "Your balance",
            "income":"Income",
            "outcome":"Outcome",
            "history":"History",
            "current month":"Current month",
            "past month":"Past month",
            "expense":"gasto",
            "expense chart":"Expense Chart",
            "add transaction":"Add transaction",
            "title": "Title",
            "select category": "Select category",
            "amount":"Amount",
            "comments": "Comments",
            "add income":"Add Income",
            "add expense":"Add expense",
            "createdAt":"Created",
            "settings page":"Settings",
            "settings description":"Customize your Expense Tracker"
        }
      },
      es: {
        translations: {
            "transaction":"transacción",
            "transactions":"transacciones",
            "balance": "Tu balance",
            "income":"Ingreso",
            "outcome":"Gasto",
            "history":"Historia",
            "current month":"Mes en curso",
            "past month":"Mes anterior",
            "expense":"expense",
            "expense chart":"Gráfico de gastos",
            "add transaction":"Agregar transación",
            "title": "Título",
            "select category": "Seleccionar categoría",
            "amount":"Monto",
            "comments": "Comentarios",
            "add income":"Agregar Ingreso",
            "add expense":"Agregar gasto",
            "createdAt":"Creado",
            "settings page":"Configuración",
            "settings description":"Personaliza tu Expense Tracker"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;