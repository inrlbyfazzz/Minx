FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AXN4/Minx /jsl/Minx
WORKDIR /jsl/Minx/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Afx-Abu/media

CMD ["node", "bot.js"]
