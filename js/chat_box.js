document.addEventListener('DOMContentLoaded', () => {
    const agentName = "AA Poker 客服机器人"
    const rootOptions = ["客服联系方式", "申请加入俱乐部", "AA Poker下载链接", "俱乐部福利", "联盟招商"]
    const optionMap = {
        "客服联系方式": "建议您使用VX和Telegram联系客服：<br>" +
            "VX客服号：Money10860<button style='cursor: pointer;' onclick=\"copyText('Money10860')\">复制</button><br><br>" +
            "泡泡下载地址：<a href='https://ya.cn' target='_blank'>https://ya.cn</a><br>泡泡号：Lajiao696969<button style='cursor: pointer;' onclick=\"copyText('Lajiao696969')\">复制</button><br><br>" +
            "Telegram下载地址：<a href='https://telegram.org/' target='_blank'>https://telegram.org/</a><br>Telegram客服：<a href='https://t.me/okk7654321' target='_blank'>@okk7654321</a><br><br>" +
            "MChat下载地址：<a href='https://mchat.com' target='_blank'>https://mchat.com</a><br>MChat号：dlyhot696969<button style='cursor: pointer;' onclick=\"copyText('dlyhot696969')\">复制</button><br><br>向您推荐优质俱乐部，玩家福利高，对局质量好。",
        "申请加入俱乐部": "俱乐部：抓起来520999<button style='cursor: pointer;' onclick=\"copyText('抓起来520999')\">复制</button><br>联盟：大龙焱<button style='cursor: pointer;' onclick=\"copyText('大龙焱')\">复制</button><br>请认准我们的优质联盟&俱乐部！",
        "AA Poker下载链接": "AA POKER唯一永久官网<br><a href=\"https://aa.zqhio.com/9twxf4\" target=\"_blank\" tabindex=\"0\">https://aa.zqhio.com/9twxf4</a>",
        "俱乐部福利": "俱乐部整合大量私局资源，新人进俱乐部首充即赠送20%，劳模奖励，幸运暴击，大牌奖励等福利应有尽有，欢迎各位老板添加客服咨询加入！",
        "联盟招商": "本联盟致力于打造纯绿色，无伙牌，禁职牌，禁bot，纯玩家之间对抗的一个公正，公平的绿色竞技环境，把抽牌局，给与俱乐部和代理最高效的收益回报。<br>现联盟长期诚招新老俱乐部以及代理合作！<br>联盟平台：AA、WPK<br俱乐部政策：新接入俱乐部返 90% 水保！<br>代理政策：新接入代理返 90% 水保！<br>有意者可联系我们：<br>VX：lljlb2024<button style='cursor: pointer;' onclick=\"copyText('lljlb2024')\">复制</button><br><br>泡泡下载地址：<a href='https://ya.cn' target='_blank'>https://ya.cn</a><br>泡泡：Louiswinwin2024<button style='cursor: pointer;' onclick=\"copyText('Louiswinwin2024')\">复制</button><br><br>Telegram下载地址：<a href='https://telegram.org/' target='_blank'>https://telegram.org/</a><br>Telegram：<a href='https://t.me/retiredat35' target='_blank'>@retiredat35</a><br><br>MChat下载地址：<a href='https://mchat.com' target='_blank'>https://mchat.com</a><br>MChat：zhua520999<button style='cursor: pointer;' onclick=\"copyText('zhua520999')\">复制</button><br><br>向您推荐优质俱乐部，玩家福利高，对局质量好。",
        "退出聊天": 1,
        "查看其它问题": 0,
    };
    const confirmationQ = "请问还有其它问题吗？";
    const leaveMessage = "很高兴能帮助到您！8s后退出聊天界面，您也可以点击右上角或者下方图标手动关闭。";
    const yesOrNoOption = ["查看其它问题", "退出聊天"]
    let pOption;

    // 获取当前时间并格式化
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // 将 24 小时制转换为 12 小时制
        hours = hours % 12;
        hours = hours ? hours : 12; // 小时为 0 时转换为 12
        minutes = minutes < 10 ? '0' + minutes : minutes; // 补零

        return `${hours}:${minutes} ${ampm}`;
    }

    const chatbox = window.parent.document.getElementById("hs-web-sdk-iframe");
    function closeBox() {
        chatbox.style.display = 'none';
        createButtons(rootOptions);
        pOption = null;
    }
    document.querySelector('[aria-label="Close chat"]').addEventListener('click', closeBox)

    // 封装生成消息的函数
    function createCustomerMessage(parentText, childText) {
        const messageList = document.querySelector('.hs-message-list');

        const messageDiv = document.createElement('div');
        messageDiv.className = 'hs-message hs-message--right';
        messageDiv.setAttribute('role', 'presentation');

        const itemWrapperDiv = document.createElement('div');
        itemWrapperDiv.className = 'hs-message__item-wrapper hs-message--with-avatar';

        const detailsAndMsgWrapperDiv = document.createElement('div');
        detailsAndMsgWrapperDiv.className = 'hs-message__details-and-msg-wrapper hs-message__grouped-messages';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'hs-message__details';

        const timestampSpan = document.createElement('span');
        timestampSpan.className = 'hs-message__timestamp';
        timestampSpan.textContent = getCurrentTime(); // 动态设置当前时间

        detailsDiv.appendChild(timestampSpan);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'hs-message__item';
        itemDiv.setAttribute('dir', 'auto');

        if (parentText) {
            const sisParentDiv = document.createElement('div');
            sisParentDiv.className = 'hs-message__sis-parent';
            sisParentDiv.textContent = parentText; // 动态设置消息文本
            itemDiv.appendChild(sisParentDiv); // 将 parentText 元素添加到 itemDiv
        }

        const sisChildDiv = document.createElement('div');
        sisChildDiv.className = 'hs-message__sis-child';
        sisChildDiv.textContent = childText;
        itemDiv.appendChild(sisChildDiv);

        detailsAndMsgWrapperDiv.appendChild(detailsDiv);
        detailsAndMsgWrapperDiv.appendChild(itemDiv);
        itemWrapperDiv.appendChild(detailsAndMsgWrapperDiv);
        messageDiv.appendChild(itemWrapperDiv);

        messageList.appendChild(messageDiv);
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    // 函数：生成服务消息
    function createServiceMessage(agentName, messageText) {
        const messageList = document.querySelector('.hs-message-list');

        const messageDiv = document.createElement('div');
        messageDiv.className = 'hs-message hs-message--left';
        messageDiv.setAttribute('role', 'presentation');

        const itemWrapperDiv = document.createElement('div');
        itemWrapperDiv.className = 'hs-message__item-wrapper hs-message--with-avatar';

        const avatarWrapperDiv = document.createElement('div');
        avatarWrapperDiv.className = 'hs-avatar__wrapper';

        const avatarImg = document.createElement('img');
        avatarImg.src = "/img/chatbox_avatar64.png";
        avatarImg.alt = 'Avatar Image';
        avatarImg.className = 'hs-message__avatar hs-avatar__avatar';
        avatarImg.setAttribute('aria-hidden', 'true');
        avatarImg.style.height = '32px';
        avatarImg.style.width = '32px';
        avatarImg.style.minWidth = '32px';

        avatarWrapperDiv.appendChild(avatarImg);

        const detailsAndMsgWrapperDiv = document.createElement('div');
        detailsAndMsgWrapperDiv.className = 'hs-message__details-and-msg-wrapper hs-message__grouped-messages';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'hs-message__details';

        const agentNameSpan = document.createElement('span');
        agentNameSpan.className = 'hs-message__agent-name';
        agentNameSpan.textContent = agentName;

        const timestampSpan = document.createElement('span');
        timestampSpan.className = 'hs-message__timestamp';
        timestampSpan.textContent = getCurrentTime(); // 动态设置当前时间

        detailsDiv.appendChild(agentNameSpan);
        detailsDiv.appendChild(timestampSpan);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'hs-message__item';
        itemDiv.setAttribute('dir', 'auto');
        // itemDiv.textContent = messageText; // 设置消息文本
        itemDiv.innerHTML = messageText;

        detailsAndMsgWrapperDiv.appendChild(detailsDiv);
        detailsAndMsgWrapperDiv.appendChild(itemDiv);
        itemWrapperDiv.appendChild(avatarWrapperDiv);
        itemWrapperDiv.appendChild(detailsAndMsgWrapperDiv);
        messageDiv.appendChild(itemWrapperDiv);

        messageList.appendChild(messageDiv);
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    // 函数：获取格式化的当前日期
    function getFormattedDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options); // 根据需要调整语言代码
    }

    // 函数：生成并追加分隔符元素
    function createChatSeparator() {
        // 获取要追加分隔符的父元素
        const messageList = document.querySelector('.hs-message-list');

        // 创建分隔符的外层 div
        const separatorWrapper = document.createElement('div');
        separatorWrapper.className = 'hs-message__chat-separator-wrapper';

        // 创建分隔符的内层 div
        const separatorDiv = document.createElement('div');
        separatorDiv.className = 'hs-message hs-message--timestamp';

        // 创建分隔符的文本 span
        const separatorText = document.createElement('span');
        separatorText.className = 'hs-message__chat-separator-content-text';
        separatorText.textContent = getFormattedDate(); // 动态设置当前日期

        // 组装分隔符元素
        separatorDiv.appendChild(separatorText);
        separatorWrapper.appendChild(separatorDiv);

        // 将分隔符追加到父元素中
        messageList.appendChild(separatorWrapper);
    }

    // 获取父元素，所有生成的按钮和子选项将放入这里
    const parentElement = document.querySelector('.hs-intents-picker__options');

    // 函数：生成按钮元素并插入到页面中
    function createButtons(options) {
        parentElement.querySelectorAll('button').forEach(button => button.remove());
        options.forEach(v => {
            const button = document.createElement('button');
            button.className = 'hs-intents-picker__option-item hs-button--empty';
            button.dir = 'auto';

            const div = document.createElement('div');
            div.className = 'hs-intents-picker__option-item-label';
            div.title = v;
            div.textContent = v;

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.className = 'hs-intents-picker__option-item-icon hs-ion-icon';
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svg.setAttribute('viewBox', '0 0 512 512');
            svg.setAttribute('aria-hidden', 'false');
            svg.style.width = '20px';
            svg.style.height = '20px';

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'currentColor');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('stroke-width', '48');
            path.setAttribute('d', 'M184 112l144 144-144 144');

            svg.appendChild(path);

            button.appendChild(div);
            button.appendChild(svg);

            button.addEventListener('click', () => {
                const option = optionMap[v]
                if (Array.isArray(option)) {
                    pOption = v
                    createButtons(option);
                } else if (typeof option === 'string') {
                    createCustomerMessage(pOption, v)
                    createServiceMessage(agentName, option)
                    createServiceMessage(agentName, confirmationQ)
                    createButtons(yesOrNoOption);
                } else if (option === 0) {
                    pOption = null;
                    createButtons(rootOptions);
                } else if (option === 1) {
                    createServiceMessage(agentName, leaveMessage)
                    setTimeout(closeBox, 8000)
                }
            });

            // 将按钮添加到父元素中
            parentElement.appendChild(button);
        });
    }

    // 调用函数，生成初始按钮
    createButtons(rootOptions);
});
