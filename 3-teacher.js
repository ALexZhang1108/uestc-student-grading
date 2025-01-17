[...document.querySelectorAll("input[type='hidden']")]
  .filter(item => item.id.includes("starNum"))
  .forEach(item => (item.value = "5"));
// 给老师的评语
let evaluations = {
    prefix: [
        '认真负责',
        '很好',
        '太可爱了',
        '非常好',
        '非常和蔼',
        '很和蔼',
        '和蔼可亲',
        '非常喜欢笑',
        '总是微笑着',
        '让人感到非常的温暖',
        '非常可爱',
        '很善良',
        '很和善也非常可爱',
        '讲课很有水平',
        '的讲课很有水平',
        '很亲和',
        '非常温柔',
        '非常有爱心',
        '很亲近学生',
        '平时兢兢业业',
        '平时勤勤恳恳',
        '教导有方',
        '循循善诱',
        '教学一丝不苟',
        '是我们的良师益友',
        '对待教学良工心苦',
        '会因材施教',
        '为我们的教育呕心沥血',
        '比较严格',
        '教学过程中尊重学生',
        '教学内容丰富有效',
        '授课的方式非常适合我们',
        '治学严谨，要求严格',
        '对待教学认真负责',
        '教学认真',
        '治学严谨',
        '传道授业解惑',
        '教学经验丰富',
        '认真细致',
        '对工作认真负责',
        '对学生因材施教',
        '严于律己',
        '富有经验，工作认真负责',
    ],
    suffix: [
        '能深入了解学生的学习和生活状况',
        '授课有条理，有重点',
        '批改作业认真及时并注意讲解学生易犯错误',
        '教学过程中尊重学生，有时还有些幽默，很受同学欢迎',
        '授课内容详细，我们学生大部分都能跟着老师思路学习',
        '理论联系实际，课上穿插实际问题，使同学们对自己所学专业有初步了解，为今后学习打下基础',
        '从不迟到早退，给学生起到模范表率作用',
        '常常对学生进行政治教育，开导学生，劝告我们努力学习，刻苦奋进，珍惜今天的时光',
        '上课气氛活跃，老师和学生的互动性得到了充分的体现',
        '对学生课堂作业的批改总结认真，能及时，准确的发现同学们存在的问题并认真讲解，解决问题。',
        '采用多媒体辅助教学，制作的电子教案详略得当，重点与难点区分的非常清楚',
        '从学生实际出发，适当缓和课堂气氛',
        '授课时生动形象，极具幽默感',
        '授课时重点突出，合理使用各种教学形式',
        '上课诙谐有趣，非常能调动课堂气氛',
        '善于用凝练的语言将复杂难于理解的过程公式清晰、明确的表达出来',
        '讲课内容紧凑、丰富，并附有大量例题和练习题',
        '我们学生大部分都能跟着老师思路学习，气氛活跃，整节课学下来有收获',
        '上课例题丰富，不厌其烦，细心讲解，使学生有所收获',
        '理论和实际相结合，通过例题使知识更条理化',
        '上课深入浅出，易于理解',
        '上课不迟到、不早退',
        '与同学们相处融洽',
        '上课很认真也很负责',
        '上课幽默风趣，让学生听了很容易把知识吸收',
        '讲课由浅入深，一步一步引导学生思考',
        '精彩的教学让我对这门课程有了浓厚的兴趣',
        '在课间休息时间，老师会与大家一起讨论问题，会耐心解答同学们的问题',
        '对于每一个人都非常好，非常照顾',
        '我也非常希望能够成为老师那样的人',
        '上课认真，从不迟到',
        '让我非常的亲切，非常喜欢他',
        '从简单到深刻，他引导学生一步一步思考，让我对这门课产生了兴趣',
        '从简单到深刻，他会引导学生一步一步思考',
        '对每个人都很好，很有爱心',
        '上课条理清晰，很容易理解',
        '讲课通俗易懂，条理清晰',
        '上课认真又幽默风趣',
        '课间，老师会和大家讨论问题，耐心回答学生的问题',
        '讲课时会一步一步引导学生思考',
        '上课时会引导学生循序渐进地思考',
        '常让人感到如沐春风',
        '讲课非常认真，对于每一个同学都非常好',
        '会耐心回答学生的问题',
        '对每一个学生都非常好',
        '非常爱护学生，教育学生的方法也非常正确',
        '对每一个学生都非常关爱，对每一个人也非常友善',
        '讲课非常认真，让人感到如沐春风',
    ],
};

/**
 * 范围随机数
 * @param {int} maxNum 随机范围终点（不包含）
 * @param {int} minNum （可选）随机范围起点（包含）
 * @returns 从范围中随机抽取的一个整数
 */
function randomNum(maxNum, minNum = 0) {
    if (maxNum < minNum) {
        let tmp = maxNum;
        maxNum = minNum;
        minNum = tmp;
    }
    return parseInt(Math.random() * (maxNum - minNum) + minNum, 10);
}

teacherName="这个"

/**
 * 加权随机数
 * @param {[int]} weightList 一个由整数组成的数组，每一个整数代表一个元素，整数之和必须为 10
 * @returns {int} 按照加权随机返回 weightList 数组中某一个元素的 index
 */
function weightedRandom(weightList) {
    if (weightList.reduce((preVal, curVal) => preVal + curVal) != 10) {
        throw Error("权重之和必须为 10");
    }
    let array = []
    for (let j = 0; j < weightList.length; j++) {
        let num = weightList[j];
        for (let i = 0; i < num; i++) {
            array.push(j);
        }
    }
    return array[randomNum(array.length)];
}
  document
  .querySelectorAll("input[type='checkbox']")
  .forEach(item => (item.checked = true));
document.querySelector("#evaText").textContent = `${teacherName}老师${evaluations.prefix[randomNum(0, evaluations.prefix.length - 1)]}，${evaluations.suffix[randomNum(0, evaluations.suffix.length - 1)]}。`;;

try {
  document.querySelector("input[value='下一步']").click();
} catch {
  document.querySelector("input[value='确认']").click();
}
