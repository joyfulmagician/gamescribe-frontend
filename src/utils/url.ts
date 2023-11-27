const baseUrl = "https://gamescribe.kneeshaw-developments.com";
// const baseUrl = "http://localhost:5000";

const URLCONST = {
  registerAPI: baseUrl + "/signup",
  loginAPI: baseUrl + "/login",
  generateContentAPI: baseUrl + "/generate_content",
  generateQuestionAPI: baseUrl + "/generate_question",
  saveUpdatedContentAPI: baseUrl + "/save_updated_content",
  getHexagonDataAPI: baseUrl + "/hexagon_data",
  getMonstersAPI: baseUrl + "/get/monsters",
};

export { URLCONST };
