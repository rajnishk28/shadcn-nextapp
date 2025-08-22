"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"



const Page = () => {
 
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We are passionate developers focused on building scalable, user-friendly, 
          and modern web applications using the latest technologies.
        </p>
      </div>

      <Separator className="my-8" />

      {/* Mission Section */}
      <Card className="mb-12 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          To empower businesses and individuals by creating digital solutions
          that are reliable, scalable, and delightful to use.
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Team Section */}
      <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="shadow-sm">
            <CardHeader>
              <CardTitle>Member {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Full-Stack Developer passionate about React, Next.js, and modern web technologies.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Page