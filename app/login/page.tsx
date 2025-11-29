"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { authenticateUser, setCurrentUser, getSystemUsers, addSystemUser, updateSystemUser } from "@/lib/storage"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Initialize default admin if no users exist
  React.useEffect(() => {
    const users = getSystemUsers()
    console.log("Current users:", users)
    
    // Check if admin exists and has password
    const adminUser = users.find(u => u.email === "admin@sola.com")
    
    if (!adminUser) {
      // Create default admin user
      const newAdmin = addSystemUser({
        email: "admin@sola.com",
        name: "System Administrator",
        password: "admin123",
        role: "admin",
        isActive: true,
      })
      console.log("Created admin user:", newAdmin)
    } else if (!adminUser.password) {
      // Update existing admin to have password
      updateSystemUser(adminUser.id, { password: "admin123" })
      console.log("Updated admin user with password")
    }
    
    // Update any other users without passwords to have default password
    users.forEach(user => {
      if (!user.password && user.email !== "admin@sola.com") {
        updateSystemUser(user.id, { password: "password123" })
      }
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Authenticate user
    const user = authenticateUser(email, password)
    console.log("Authentication attempt:", { email, password, user })
    if (user) {
      setCurrentUser(email)
      window.location.href = "/"
    } else {
      setError("Invalid email or password")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Area */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Sola</h1>
          <p className="text-gray-600 mt-2">Sola Allocation Tool</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </a>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Contact administrator
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Sola Allocation Tool. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
