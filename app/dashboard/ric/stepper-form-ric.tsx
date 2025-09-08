"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/ui/file-upload"

export default function StepperFormRic() {
    const [step, setStep] = useState("step1")
    const [files, setFiles] = useState<File[]>([]);

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

    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };

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
                <TabsList className="grid grid-cols-4 w-full rounded-xl bg-gray-100 dark:bg-gray-900">
                    <TabsTrigger value="step1">Judul & RASCI</TabsTrigger>
                    <TabsTrigger value="step2">Masalah & Solusi</TabsTrigger>
                    <TabsTrigger value="step3">Proses Bisnis</TabsTrigger>
                    <TabsTrigger value="step4">Hasil & Sign Off</TabsTrigger>
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
                                <CardContent className="grid gap-7">
                                    <div className="grid gap-3">
                                        <Label htmlFor="entitas">Judul</Label>
                                        <Input
                                            id="entitas"
                                            name="entitas"
                                            value={formData.entitas}
                                            onChange={handleChange}
                                        // placeholder="Divisi IT Non ERP Solution Projects"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Optimisasi proses bisnis dengan implementasi (Solusi Desain).
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">As-is Process & RASCI</Label>
                                        <Input
                                            id="judulAplikasi"
                                            name="judulAplikasi"
                                            value={formData.judulAplikasi}
                                            onChange={handleChange}
                                        // placeholder="Project Management Tools"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Proses bisnis ada di Level apa di PTM (refer to EA Tools + STK as-is optional).
                                        </p>
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

                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">Permasalahan</Label>
                                        <Textarea placeholder="Masalah yang ada meliputi..." id="message" />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">Dampak Masalah</Label>
                                        <Textarea placeholder="Dampak Masalah yang ada adalah..." id="message" />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">Faktor Penyebab Masalah</Label>
                                        <Textarea placeholder="Faktor Penyebab Masalah yakni..." id="message" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">Solusi saat ini</Label>
                                        <Textarea placeholder="Solusi saat ini adalah..." id="message" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">To be Solution (Alternatif Solusi)</Label>
                                        <Textarea placeholder="Berikut alternatif solusi yang ada..." id="message" />
                                    </div>

                                    <div className="flex justify-end mt-6 gap-4">
                                        <Button variant="outline" onClick={() => setStep("step1")}>
                                            Back
                                        </Button>
                                        <Button variant="default" onClick={() => setStep("step3")}>
                                            Next
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>

                <TabsContent value="step3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="grid gap-7">
                                    <div className="grid gap-3">
                                        <Label htmlFor="entitas">To be Process Business + RASCI + KKI</Label>
                                        {/* <Input
                                            id="entitas"
                                            name="entitas"
                                            value={formData.entitas}
                                            onChange={handleChange}
                                            type="file"
                                        // placeholder="Divisi IT Non ERP Solution Projects"
                                        /> */}
                                        <div className="w-full max-w-4xl mx-auto min-h-50 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                                            <FileUpload onChange={handleFileUpload} />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Klasifikasi keamanan Informasi (ECS) : Mandatory.
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">
                                            Potensi Value Creation/Value Solution/Value Addition/Cost
                                            Reduction/Sustainability
                                        </Label>
                                        <Input
                                            id="judulAplikasi"
                                            name="judulAplikasi"
                                            value={formData.judulAplikasi}
                                            onChange={handleChange}
                                        // placeholder="Project Management Tools"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">
                                            Expected Completion Target & Expected Target Revisi STK
                                        </Label>
                                        <Input
                                            id="judulAplikasi"
                                            name="judulAplikasi"
                                            value={formData.judulAplikasi}
                                            onChange={handleChange}
                                        // placeholder="Project Management Tools"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Dengan kondisi: STK terkait harus sudah ada atau minimal expected target revisi STK.
                                        </p>
                                    </div>
                                    <div className="flex justify-end mt-6 gap-4">
                                        <Button variant="outline" onClick={() => setStep("step2")}>
                                            Back
                                        </Button>
                                        <Button variant="default" onClick={() => setStep("step4")}>
                                            Next
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>


                <TabsContent value="step4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="grid gap-7">
                                    <div className="grid gap-3">
                                        <Label htmlFor="entitas">Hasil Setelah Perbaikan</Label>
                                        <Textarea placeholder="Berikut Hasil dari perbaikan..." id="message" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="judulAplikasi">
                                            Sign Off Pejabat Selevel VP User, BR, dan SARM
                                        </Label>
                                        <div className="w-full max-w-4xl mx-auto min-h-50 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                                            <FileUpload onChange={handleFileUpload} />
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4 gap-3">
                                        <Button variant="outline" onClick={() => setStep("step3")}>Back</Button>
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
