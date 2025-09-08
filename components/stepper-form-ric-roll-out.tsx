"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

export default function StepperFormRicRollOut() {
    const [step, setStep] = useState("step1")
    const [formData, setFormData] = useState({
        entitas: "",
        judulAplikasi: "",
        checklist: {
            compareSS: false,
            stk: false,
            joinDomain: false,
            erp: false,
            aktivasi: false,
            koneksiDC: false,
            resource: false,
        },
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCheckbox = (field: keyof typeof formData.checklist) => {
        setFormData({
            ...formData,
            checklist: {
                ...formData.checklist,
                [field]: !formData.checklist[field],
            },
        })
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            {/* Tabs controlled */}
            <Tabs value={step} onValueChange={setStep} className="w-full">
                <TabsList className="grid grid-cols-2 w-full rounded-xl bg-gray-100 dark:bg-gray-900">
                    <TabsTrigger value="step1">Entitas & Judul</TabsTrigger>
                    <TabsTrigger value="step2">Readiness Assesment</TabsTrigger>
                </TabsList>

                {/* Step 1 */}
                <TabsContent value="step1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="entitas">Entitas</Label>
                                        <Input
                                            id="entitas"
                                            name="entitas"
                                            value={formData.entitas}
                                            onChange={handleChange}
                                            placeholder="Divisi IT Non ERP Solution Projects"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">Judul Aplikasi</Label>
                                        <Input
                                            id="judulAplikasi"
                                            name="judulAplikasi"
                                            value={formData.judulAplikasi}
                                            onChange={handleChange}
                                            placeholder="Project Management Tools"
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <Button onClick={() => setStep("step2")}>Next</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>

                {/* Step 2 */}
                <TabsContent value="step2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="p-6 space-y-4">
                                    <h2 className="text-lg font-semibold mb-4">
                                        A. Kajian Proses Bisnis
                                    </h2>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="compareSS"
                                            checked={formData.checklist.compareSS}
                                            onCheckedChange={() => handleCheckbox("compareSS")}
                                        />
                                        <Label htmlFor="compareSS">
                                            Compare dengan proses bisnis SS Holding
                                        </Label>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-5">
                                        <Checkbox
                                            id="stk"
                                            checked={formData.checklist.stk}
                                            onCheckedChange={() => handleCheckbox("stk")}
                                        />
                                        <Label htmlFor="stk">STK as is &amp; to be</Label>
                                    </div>

                                    <h2 className="text-lg font-semibold mb-4">
                                        B. Persiapan Teknis
                                    </h2>

                                    <div className="flex items-center space-x-2 mb-3">
                                        <Checkbox
                                            id="joinDomain"
                                            checked={formData.checklist.joinDomain}
                                            onCheckedChange={() => handleCheckbox("joinDomain")}
                                        />
                                        <Label htmlFor="joinDomain">Sudah join domain + AD Pertamina</Label>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-3">
                                        <Checkbox
                                            id="erp"
                                            checked={formData.checklist.erp}
                                            onCheckedChange={() => handleCheckbox("erp")}
                                        />
                                        <Label htmlFor="erp">Sudah menggunakan ERP Pertamina</Label>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-3">
                                        <Checkbox
                                            id="aktivasi"
                                            checked={formData.checklist.aktivasi}
                                            onCheckedChange={() => handleCheckbox("aktivasi")}
                                        />
                                        <Label htmlFor="aktivasi">Sudah implementasi aktivasi yang dipersyaratkan</Label>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-3">
                                        <Checkbox
                                            id="koneksiDC"
                                            checked={formData.checklist.koneksiDC}
                                            onCheckedChange={() => handleCheckbox("koneksiDC")}
                                        />
                                        <Label htmlFor="koneksiDC">Sudah ada koneksi dengan data center</Label>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-5">
                                        <Checkbox
                                            id="resource"
                                            checked={formData.checklist.resource}
                                            onCheckedChange={() => handleCheckbox("resource")}
                                        />
                                        <Label htmlFor="resource">Menyiapkan resource yang diperlukan, contoh: admin</Label>
                                    </div>

                                    <div className="flex justify-end mt-6 gap-4">
                                        <Button variant="outline" onClick={() => setStep("step1")}>
                                            Back
                                        </Button>
                                        <Button className="bg-green-600 hover:bg-green-700">
                                            Submit
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
            </Tabs>
        </div>
    )
}
