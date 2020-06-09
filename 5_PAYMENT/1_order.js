$(function () {
    var $selectEmail = $(".select_domain"),
        $targetInput = $(".email_domain");

    $selectEmail.change(function () {
        var domain = $(this).val();
        $targetInput.val(domain);
    });

    var $count = $(".count"),
        $unit = $(".unitPrice").text()
    $unitPrice = $unit.replace(",", ""),
        //html속성을 사용하여 포현해볼것
        $currentNumber = parseInt($count.text()),
        $total = $(".total");




    $("span a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("plus")) {
            $currentNumber += 1;
        } else {
            if ($currentNumber > 0) {
                $currentNumber -= 1;
            }
        }

        $count.text($currentNumber);

        var semiTotal = $unitPrice * $currentNumber;
        var total = Number(semiTotal).toLocaleString("en");
        $total.text(total);

    })
});