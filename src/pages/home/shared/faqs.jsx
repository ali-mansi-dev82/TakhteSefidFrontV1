import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

const Faqs = () => {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            امکانات تخته سفید چیه؟
          </AccordionSummary>
          <AccordionDetails>
            این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می شود،
            تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل دادن
            به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و همچنین
            نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما می توانید
            هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن متغیرهای پیش فرض
            ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر HTML می تواند در
            داخل .accordion-body قرار گیرد، اگرچه این انتقال سرریز را محدود می
            کند.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            امکانات تخته سفید چیه؟
          </AccordionSummary>
          <AccordionDetails>
            این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می شود،
            تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل دادن
            به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و همچنین
            نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما می توانید
            هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن متغیرهای پیش فرض
            ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر HTML می تواند در
            داخل .accordion-body قرار گیرد، اگرچه این انتقال سرریز را محدود می
            کند.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            امکانات تخته سفید چیه؟
          </AccordionSummary>
          <AccordionDetails>
            این بدنه آکاردئونی اولین مورد است. به طور پیش فرض نشان داده می شود،
            تا زمانی که افزونه collapse کلاس های مناسبی را که برای استایل دادن
            به هر عنصر استفاده می کنیم اضافه کند. این کلاس ها ظاهر کلی و همچنین
            نمایش و پنهان شدن از طریق انتقال CSS را کنترل می کنند. شما می توانید
            هر یک از این موارد را با CSS سفارشی یا نادیده گرفتن متغیرهای پیش فرض
            ما تغییر دهید. همچنین شایان ذکر است که تقریباً هر HTML می تواند در
            داخل .accordion-body قرار گیرد، اگرچه این انتقال سرریز را محدود می
            کند.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="contained" size="medium">
          سوال های بیشتر
        </Button>
      </div>
    </>
  );
};

export default Faqs;
