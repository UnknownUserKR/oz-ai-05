// 화면에 표시할 USDT 심볼 목록
const SYMBOLS = [
    "BTCUSDT", "ETHUSDT", "BNBUSDT", "NEOUSDT", "LTCUSDT",
    "QTUMUSDT", "ADAUSDT", "XRPUSDT", "EOSUSDT", "TUSDUSDT"
]

const REFRESH_INTERVAL = 1000 // 1초마다 갱신

const tbody = document.querySelector(".content")
const filterButtons = document.querySelectorAll(".filter-btn")
const searchInput = document.querySelector("#search")

let latestData = []          // 가장 최근에 받아온 시세 데이터
const favorites = new Set()  // 관심 등록한 심볼
let currentFilter = "all"    // "all" | "favorites"

// Binance 24시간 티커 API에서 등록한 심볼들의 시세를 가져옴
function fetchPrices() {
    const symbolsParam = encodeURIComponent(JSON.stringify(SYMBOLS))

    fetch(`https://api4.binance.com/api/v3/ticker/24hr?symbols=${symbolsParam}`)
        .then(response => response.json())
        .then(data => {
            latestData = data
            renderTable()
        })
        .catch(error => console.error("시세 조회 실패:", error))
}

// 현재 필터/검색어에 맞는 행만 화면에 그림 (재요청 없이 latestData로만 처리)
function renderTable() {
    const keyword = searchInput.value.trim().toUpperCase()

    const rows = latestData.filter(item => {
        if (currentFilter === "favorites" && !favorites.has(item.symbol)) {
            return false
        }
        if (keyword && !item.symbol.includes(keyword)) {
            return false
        }
        return true
    })

    tbody.innerHTML = ""

    for (const item of rows) {
        const isFavorite = favorites.has(item.symbol)
        const changeRate = Number(item.priceChangePercent)
        const changeClass = changeRate >= 0 ? "up" : "down"
        const changeSign = changeRate >= 0 ? "+" : ""

        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td><span class="star ${isFavorite ? "active" : ""}">${isFavorite ? "★" : "☆"}</span></td>
            <td class="symbol">${item.symbol}</td>
            <td>${Number(item.lastPrice).toLocaleString()}</td>
            <td class="${changeClass}">${changeSign}${changeRate.toFixed(2)}%</td>
            <td>${Number(item.highPrice).toLocaleString()}</td>
            <td>${Number(item.lowPrice).toLocaleString()}</td>
        `

        tr.querySelector(".star").addEventListener("click", () => {
            if (favorites.has(item.symbol)) {
                favorites.delete(item.symbol)
            } else {
                favorites.add(item.symbol)
            }
            renderTable()
        })

        tbody.appendChild(tr)
    }
}

// 전체보기 / 관심항목 버튼 전환
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
        currentFilter = button.dataset.filter
        renderTable()
    })
})

// 심볼 검색 (입력할 때마다 필터링)
searchInput.addEventListener("input", renderTable)

// 최초 1회 조회 후, 일정 주기로 계속 갱신
fetchPrices()
setInterval(fetchPrices, REFRESH_INTERVAL)
