"use client"
import React from "react";
import Link from "next/link";
import Card from '@/components/ui/card';
import NavBar from '@/components/navbar';

import { MonthlyCalendar } from "@/app/calendar/components/MonthlyCalendar"

const Page = () => {
    return (
        <section>
            <MonthlyCalendar></MonthlyCalendar>
        </section>
    );
};

export default Page;
