class DigitalBookReader {
    constructor() {
      this.currentSpread = 0;
      this.totalPages = 0;
      this.pages = [];
      this.isAnimating = false;
  
      this.book = document.getElementById("book");
      this.currentSpreadEl = document.getElementById("currentSpread");
      this.leftPageContent = document.getElementById("leftPageContent");
      this.rightPageContent = document.getElementById("rightPageContent");
      this.leftPageNumber = document.getElementById("leftPageNumber");
      this.rightPageNumber = document.getElementById("rightPageNumber");
      this.pageIndicator = document.getElementById("pageIndicator");
      this.brightnessSlider = document.getElementById("brightness");
      this.fontSizeSlider = document.getElementById("font-size");
      this.bookContainer = document.getElementById("bookContainer");
      this.prevArea = document.getElementById("prevArea");
      this.nextArea = document.getElementById("nextArea");
      this.measurementContainer = document.getElementById("measurementContainer");
  
      this.bookElements = this.parseBookContent();
      this.initializeEventListeners();
  
      setTimeout(() => {
        this.repaginateContent();
      }, 100);
    }
  
    parseBookContent() {
      const content = [
        { type: "h1", content: "Một chút gì đó gửi đế bạn công chúa" },
        {
          type: "p",
          content:
            "À nhonnnn, hôm nay tui gửi bạn cuốn sách này kèm theo những điều tui muốn nói với bn bồ nhaaa. Đến bạn bồ, cũng như một người bạn, một ebe, một cô công chúa của tui cho chuyến hành trình sắp tới của tụi mình nha."
        },
        {
          type: "p",
          content:
            "Hmmmm… bắt đầu từ đâu đây nhỉ."
        },
        {
          type: "p",
          content:
            "Chắc là, mình sắp phải xa nhau thiệt gòi. Cơ mà, như đã nói lúc trước trong mail của tui, thì tui mong là mình vẫn sẽ tiếp tục cố gắng cùng nhau nè. Sắp tới có thể là sẽ khá là khó khăn chứ hong phải dễ dàng gì, tụi mình vẫn sẽ tiếp tục đồng hành cùng nhau nữa nè."
        },
        {
          type: "p",
          content:
            "Tuy là khó khăn nhma nếu nghĩ theo hướng tích cực như hôm trước mình nói, thì đây là thử thách dành cho mình, nó vẫn sẽ có mặt tốt là mình sẽ trân trọng nhau hơn, trân trọng những buổi mà mình gặp nhau hơn nè. "
        },
        {
          type: "p",
          content:
            "Btw, MyY lên trên CT học gòi, tui mong là MyY sẽ luôn vui vẻ nè, tích cực hơn nè. Cơ mà chắc chắn là không thể lúc nào mình cũng có thể gặp chuyện tốt, chuyện vui được. Khi mà lúc đó tới thì bạn phải nhớ méc bồ nhaaa. Tui biết là bạn bồ rất là dỏi nè, rất là mạnh mẽ khi mà đối diện với mọi thứ luôn. Nhma tui cũng biết, thì MyY cũng đã phải gồng mình rất nhiều khi mà đối diện với những chuyện đó, nhiều lúc bn bồ ép bản thân nhiều lắm. Bây giờ MyY có tui gòi, có gì phải nhớ méc bồ nè, hong được ôm một mình nữa nè. Tuy là không thể lúc nào cũng có thể có ở đó để ôm bạn bồ trực tiếp, nhma tui sẽ luôn ở đây và lắng nghe bạn bồ nha."
        },
        //////////////////////////////
        { type: "h2", content: "CHỊ NHẮC EM" },
        {
          type: "p",
          content:
            "Khi mà buồn hay gặp phải điều gì đó, bạn bồ đừng gồng mình lên nhiều quá nữa nha. Khi muốn khóc thì cứ khóc, đừng giữ trong lòng quá nhiều nữa nè. Chuyện đó hong có việc gì sai hếttt. CƠ MÀ, như tui đã nhắc đi nhắc lại nhiều lần gòi, là khi mà chuyện đó tới, thì bạn bồ hong được khóc một mình nữa, hong được cách ly bản thân, hong được ôm lại mọi thứ vào mình nữa. Lúc đó thì cứ kiếm tui nè, tuy là tui sẽ hong thể an ủi hay nói gì với bạn bồ quá nhiều, nhma tui vẫn sẽ có thể lắng nghe hết tất cả mọi thứ nè bn bồ."
        },
        {
          type: "p",
          content:
            "Một chiện quan trọng nữa, lên CT mọi thứ chắc có lẽ sẽ hong luôn dễ dàng, sẽ có những lúc mọi thứ không như ý mình. Bạn bồ cố lên nhaaaa, MyY dỏi nè. Cơ mà, khi lên đó thì hong có nhiều người ở bên mình, nên là bạn bồ phải biết giữa sức khỏe đó nhaaa. Hỏng có được cố quá sức nhiều quá đóo. có dì thì phải la làng lên bít chưa. Và cả hong được chịu đựng mọi thứ một mình. MyY dỏi dỏiiii."
        },
        {
          type: "p",
          content:
            "Hmm… Tuy là tui vẫn rất thoải mái đón nhận tất cả mọi thứ nè, cơ mà nói đi cũng phải nói lại là bản thân có buồn hay tiếc không, thì câu trả lời vẫn là có. Ừm ừm, mọi thứ đều rất là ổn, nhma mình vẫn còn một chút tiếc nuối he. Mà không phải vì chuyện đó mà mình nản lòng he. Mình vẫn sẽ tiếp tục trên con đường của cả 2 đã chọn nè. Vẫn cố gắng vì bản thân và vì nhau dù cho có gặp chuyện nữa nè."
        },
        {
          type: "p",
          content:
            "Và cả, lâu lâu cho tui ích kỷ một xí hì hì. Bạn bồ lên CT học đừng bỏ tui nhìu quá nhaaaa😭😭. Lúc lên đó, tui hong được gặp bạn bồ bao nhiêu nữa nên tui mong là bn bồ đừng có off nhìu quá nhaaa. "
        },
        {
          type: "p",
          content:
            "The ability to carry thousands of books in a single device has transformed travel reading."
        },
        { type: "h2", content: "Một vài lời xin lỗi của bản thân gửi đến MyY"
        },
        {
          type: "p",
          content:
            "Tui xin lỗi bạn bồ rất nhiều vì đã làm bạn bồ khóc nhiều lần dù là vô tình hay cố ý."
        },
        {
          type: "p",
          content: "Đã làm MyY phải đối diện với những chiện hong mấy tốt đẹp lắm. Đã nhiều lần khiến MyY phải lo lắng cho tui, những lần khiến MyY dận tui nữa."
        },
        {
          type: "p",
          content:
            "Xin lỗi vì đã làm bn bồ phải thất vọng nhiều nữa, về nhiều thứ"
        },
        {
          type: "p",
          content:
            "Xin lỗi vì đã đem lại cho bn bồ những lúc cảm giác hong an toàn nữa."
        },
        {
          type: "p",
          content:
            "Hyperlinks, embedded multimedia, and instant dictionary access create a more immersive and educational environment."
        },
        {
          type: "p",
          content:
            "Xin lỗi vì bản thân tui không thật sự quá tốt, không thật sự quá xuất sắc với nhiều thứ."
        },
        { type: "h2", content: "Sự biết ơn và những lời cảm ơn" },
        {
          type: "p",
          content:
            "Và cuối cùng là, nhìu chút biết ơn và lời cảm ơn của tui đối với MyY nà. Cảm ơn ai đó đã đến với cuộc đời tui, bằng một cách tui hong ngờ tới, dù là đã phớt lờ nhau rất rất nhiều lần. Mỗi người sẽ có một cảm giác đặc biệt riêng mà ha."
        },
        {
          type: "p",
          content:
            "Cảm ơn ai đó vì đã đi chơi với tui nhiều nè, mặc dù là lúc nào cũng quằn lên quằn xuống. Cảm ơn cả chiện đã ra ngoài với tui mỗi lần tui qua kiếm dù là triều đình đang ở trong nhà nà."
        },
        {
          type: "p",
          content:
            "Cảm ơn ai đó đã chọn tiếp tục đồng hành cùng nhau dù cho hành trình sắp tới sẽ hong dễ dàng cho lắm. Mặc dù trước đó MyY cũng hong hề okay với chuyện yêu xa nè. Bản thân tui cũng đã trải qua những chuyện không hay lắm về chuyện này. Tui biết ơn vì tụi mình đã chọn ở lại và tiếp tục cố gắng vì nhau. Một chút gì đó cho bạn bồ có thể lật lại xem khi mình xa nhau nha."
        },
        {
          type: "p",
          content:
            "Cảm ơn vì đã ở đây và lắng nghe, quan tâm tui rất nhiều. Đã luôn động viên tui mỗi lúc tui nản lòng, đã tổ chức và tặng quà sinh nhật cho tui nữa nè."
        },
        {
          type: "p",
          content:
            "Cảm ơn bn bồ đã đi cùng tui những lúc tui không ổn nữa nè, đã ở đó lắng nghe và ôm tui nữa nè. Cảm ơn vì đã cho tui cái má và đã làm công chúa của tui nữa."
        },
        {
          type: "p",
          content:
            "Còn nhiều nhiều điều tui muốn nói và cảm ơn cũng như xin lỗi bạn bồ lắm. Nhma cuốn sách này cũng khá dài gòi ha. Thôi thì dịp khác tui sẽ viết tiếp gửi cho bạn bồ nha, vào một ngày nào đó, cuốn sách này sẽ có thêm những trang mới đến bạn bồ."
        },
        {
          type: "p",
          content:
            "Và yahhh, cuối cùng đây là vài dòng tạm biệt bạn bồ của toai nà. Tui… Võ Nguyễn Gia khánh, biết ơn vì chúng ta đã và vẫn đang ở đây, đồng hành cùng nhau, cố gắng vì bản thân và vì nhau. Biết ơn về mọi thứ mình dành cho nhau, tuy là hành trình đến hiện tại vẫn chưa gọi là dài nhma nó không hoàn toàn ngắn. Thương bạn công chúa của tui nhìuuuu. Give u a hug & a kiss."
        },
        {
            type: "p",
            content: "-Thương MyY, bạn bồ, công chúa(của toai), Monica-",
            style:
              "text-align: center; margin-top: 40px; ;"
        },
        {
          type: "p",
          content: "~See yaaaa~",
          style:
            "text-align: center; margin-top: 40px; font-style: italic; font-size: 1.3em;"
        }
      ];
      return content;
    }
  
    initializeEventListeners() {
      this.prevArea.addEventListener("click", () => this.prevSpread());
      this.nextArea.addEventListener("click", () => this.nextSpread());
  
      this.brightnessSlider.addEventListener("input", (e) =>
        this.adjustBrightness(e.target.value)
      );
      this.fontSizeSlider.addEventListener("input", (e) => {
        this.adjustFontSize(e.target.value);
        setTimeout(() => this.repaginateContent(), 50);
      });
  
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") this.prevSpread();
        if (e.key === "ArrowRight") this.nextSpread();
      });
    }
  
    repaginateContent() {
      this.pages = [];
      const maxHeight = this.getMaxPageHeight() - 100;
  
      this.measurementContainer.style.fontSize =
        getComputedStyle(this.bookContainer).getPropertyValue("--font-size") ||
        "16px";
      this.measurementContainer.style.color =
        getComputedStyle(this.bookContainer).getPropertyValue("--text-color") ||
        "#2c2c2c";
  
      let currentPageElements = [];
      let currentPageHeight = 0;
  
      for (const element of this.bookElements) {
        const elementHeight = this.measureElementHeight(element);
  
        if (elementHeight > maxHeight) {
          if (currentPageElements.length > 0) {
            this.pages.push([...currentPageElements]);
            currentPageElements = [];
            currentPageHeight = 0;
          }
  
          if (element.type === "p") {
            const splitParagraphs = this.splitParagraph(element, maxHeight);
            for (const splitPart of splitParagraphs) {
              this.pages.push([splitPart]);
            }
          } else {
            this.pages.push([element]);
          }
        } else if (
          currentPageHeight + elementHeight > maxHeight &&
          currentPageElements.length > 0
        ) {
          this.pages.push([...currentPageElements]);
          currentPageElements = [element];
          currentPageHeight = elementHeight;
        } else {
          currentPageElements.push(element);
          currentPageHeight += elementHeight;
        }
      }
  
      if (currentPageElements.length > 0) {
        this.pages.push(currentPageElements);
      }
  
      this.totalPages = this.pages.length;
  
      if (this.currentSpread * 2 >= this.totalPages) {
        this.currentSpread = Math.max(0, Math.floor((this.totalPages - 1) / 2));
      }
  
      this.updateCurrentSpread();
      this.updateUI();
    }
  
    measureElementHeight(element) {
      const style = element.style ? ` style="${element.style}"` : "";
      this.measurementContainer.innerHTML = `<${element.type}${style}>${element.content}</${element.type}>`;
  
      const tempDiv = this.measurementContainer.firstElementChild;
      return tempDiv.offsetHeight;
    }
  
    splitParagraph(paragraph, maxHeight) {
      const words = paragraph.content.split(" ");
      const parts = [];
      let currentWords = [];
  
      for (const word of words) {
        const testWords = [...currentWords, word];
        const testElement = { ...paragraph, content: testWords.join(" ") };
        const testHeight = this.measureElementHeight(testElement);
  
        if (testHeight > maxHeight && currentWords.length > 0) {
          parts.push({ ...paragraph, content: currentWords.join(" ") });
          currentWords = [word];
        } else {
          currentWords.push(word);
        }
      }
  
      if (currentWords.length > 0) {
        parts.push({ ...paragraph, content: currentWords.join(" ") });
      }
  
      return parts;
    }
  
    getMaxPageHeight() {
      const containerHeight = this.bookContainer.offsetHeight;
      const padding = window.innerWidth <= 768 ? 90 : 130;
      return containerHeight - padding;
    }
  
    renderPageContent(pageIndex) {
      if (pageIndex >= this.pages.length) return "";
  
      return this.pages[pageIndex]
        .map((element) => {
          const style = element.style ? ` style="${element.style}"` : "";
          return `<${element.type}${style}>${element.content}</${element.type}>`;
        })
        .join("");
    }
  
    updateCurrentSpread() {
      const leftPageIndex = this.currentSpread * 2;
      const rightPageIndex = leftPageIndex + 1;
  
      this.leftPageContent.innerHTML = this.renderPageContent(leftPageIndex);
      this.rightPageContent.innerHTML = this.renderPageContent(rightPageIndex);
  
      this.leftPageNumber.textContent = leftPageIndex + 1;
      this.rightPageNumber.textContent =
        rightPageIndex < this.totalPages ? rightPageIndex + 1 : "";
    }
  
    nextSpread() {
      if (this.isAnimating || this.currentSpread * 2 + 1 >= this.totalPages)
        return;
  
      this.isAnimating = true;
      this.createFlippingPage("next");
    }
  
    prevSpread() {
      if (this.isAnimating || this.currentSpread <= 0) return;
  
      this.isAnimating = true;
      this.createFlippingPage("prev");
    }
  
    createFlippingPage(direction) {
      const flippingPage = document.createElement("div");
      flippingPage.className = `flipping-page ${direction}-flip`;
  
      const pageFront = document.createElement("div");
      pageFront.className = "page-front";
  
      const pageBack = document.createElement("div");
      pageBack.className = "page-back";
  
      if (direction === "next") {
        const currentRightIndex = this.currentSpread * 2 + 1;
        const nextLeftIndex = (this.currentSpread + 1) * 2;
  
        pageFront.innerHTML = `
                          <div class="page-content">${this.renderPageContent(
                            currentRightIndex
                          )}</div>
                          <div class="page-number">${
                            currentRightIndex < this.totalPages
                              ? currentRightIndex + 1
                              : ""
                          }</div>
                      `;
  
        pageBack.innerHTML = `
                          <div class="page-content">${this.renderPageContent(
                            nextLeftIndex
                          )}</div>
                          <div class="page-number">${
                            nextLeftIndex < this.totalPages
                              ? nextLeftIndex + 1
                              : ""
                          }</div>
                      `;
      } else {
        const currentLeftIndex = this.currentSpread * 2;
        const prevRightIndex = (this.currentSpread - 1) * 2 + 1;
  
        pageFront.innerHTML = `
                          <div class="page-content">${this.renderPageContent(
                            prevRightIndex
                          )}</div>
                          <div class="page-number">${
                            prevRightIndex < this.totalPages
                              ? prevRightIndex + 1
                              : ""
                          }</div>
                      `;
  
        pageBack.innerHTML = `
                          <div class="page-content">${this.renderPageContent(
                            currentLeftIndex
                          )}</div>
                          <div class="page-number">${currentLeftIndex + 1}</div>
                      `;
      }
  
      flippingPage.appendChild(pageFront);
      flippingPage.appendChild(pageBack);
      this.book.appendChild(flippingPage);
  
      setTimeout(() => {
        flippingPage.classList.add("flipping");
      }, 50);
  
      setTimeout(() => {
        if (direction === "next") {
          this.currentSpread++;
        } else {
          this.currentSpread--;
        }
        this.updateCurrentSpread();
        this.updateUI();
      }, 300);
  
      setTimeout(() => {
        this.book.removeChild(flippingPage);
        this.isAnimating = false;
      }, 850);
    }
  
    updateUI() {
      const leftPage = this.currentSpread * 2 + 1;
      const rightPage = this.currentSpread * 2 + 2;
      const displayRight = rightPage <= this.totalPages ? `-${rightPage}` : "";
      this.pageIndicator.textContent = `Page ${leftPage}${displayRight} of ${this.totalPages}`;
    }
  
    adjustBrightness(value) {
      const brightness = parseFloat(value);
      const r = Math.floor(250 * brightness);
      const g = Math.floor(247 * brightness);
      const b = Math.floor(240 * brightness);
      const bgColor = `rgb(${r}, ${g}, ${b})`;
      const textColor = brightness > 0.7 ? "#2c2c2c" : "#555";
  
      this.bookContainer.style.setProperty("--bg-color", bgColor);
      this.bookContainer.style.setProperty("--text-color", textColor);
    }
  
    adjustFontSize(value) {
      this.bookContainer.style.setProperty("--font-size", `${value}px`);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    new DigitalBookReader();
  });
  
  function button_back(){
    window.location.href ='../menu/menu.html';
  }