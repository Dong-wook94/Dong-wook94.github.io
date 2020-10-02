---
layout: post
title: "java unix timestamp를 date String 으로 변환"
categories: dev
tags: unix timestamp date string 
comments: true
---

Unix time을 Date String 으로 변환하는 함수

~~~java
public static String getDateString(String unixTime) {
        long timestamp = Long.parseLong(unixTime);

        Date date = new Date(timestamp * 1000L);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일");
        sdf.setTimeZone(java.util.TimeZone.getTimeZone("GMT+9"));

        return sdf.format(date);
    }
~~~

