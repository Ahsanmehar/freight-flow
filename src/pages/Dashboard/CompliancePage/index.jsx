// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Download, Zap } from "lucide-react";

export default function InvoicesPage() {
  const [formData, setFormData] = React.useState({
    method: "",
    accountName: "",
    routingNumber: "",
    accountNumber: "",
  });

  const [errors, setErrors] = React.useState({});

  const invoices = [
    {
      id: "INV-001",
      status: "Overdue",
      company: "ABC Transport",
      route: "LA → Phoenix",
      amount: "$1,200",
      due: "12/8/2024",
    },
    {
      id: "INV-002",
      status: "Pending",
      company: "XYZ Logistics",
      route: "Chicago → Detroit",
      amount: "$950",
      due: "12/15/2024",
    },
    {
      id: "INV-003",
      status: "Paid",
      company: "Global Freight",
      route: "Houston → Dallas",
      amount: "$2,400",
      due: "12/20/2024",
    },
    {
      id: "INV-004",
      status: "quick pay",
      company: "TransWorld",
      route: "Miami → Atlanta",
      amount: "$1,050",
      due: "12/22/2024",
    },
    {
      id: "INV-005",
      status: "Pending",
      company: "NextGen Transport",
      route: "Seattle → Portland",
      amount: "$780",
      due: "12/25/2024",
    },
  ];
  const data = [
    { id: 1, icon: "🛡️", title: "Compliance Score", text: "60%", label: "" },
    {
      id: 2,
      icon: "✅",
      title: "Total Paid",
      text: "$2,650",
      label: "This month",
    },
    {
      id: 3,
      icon: "⏰",
      title: "Quick Pay Used",
      text: "18%",
      label: "of total volume",
    },
  ];
  const validate = () => {
    let newErrors = {};

    if (!formData.method || formData.method === "Select method") {
      newErrors.method = "Please select a payout method.";
    }
    if (!formData.accountName.trim()) {
      newErrors.accountName = "Account name is required.";
    }
    if (!/^\d{9}$/.test(formData.routingNumber)) {
      newErrors.routingNumber = "Routing number must be 9 digits.";
    }
    if (!/^\d{6,17}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must be 6–17 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("✅ Payout method added successfully!");
      setFormData({
        method: "",
        accountName: "",
        routingNumber: "",
        accountNumber: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[var(--color-bg1)] text-[var(--color-text1)] min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-white)]">
            Compliance Management
          </h1>
          <p className="text-sm text-[var(--color-text1)]">
            Manage documents, track expiry dates, and maintain compliance{" "}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg2)] text-[var(--color-white)] text-sm font-semibold rounded-md shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-btn-hover)] transition">
          <span className="text-lg">+</span>
          Upload Document{" "}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-2 mb-10"
      >
        {data.map((card) => (
          <div
            key={card.id}
            className="relative w-full max-w-sm bg-[#111] backdrop-blur-2xl border-2 rounded-2xl 
                 overflow-hidden transition-all duration-500 shadow 
                 hover:shadow-cyan-500/50 hover:scale-105 p-6 
                 flex justify-between items-center"
          >
            {/* --- Left: Text --- */}
            <div className="flex flex-col space-y-1">
              <h1 className="text-xl font-normal text-white">{card.title}</h1>
              <p className="text-white">{card.text}</p>
              <span className="bg-black/20 text-white rounded-md px-3 py-1 text-sm shadow-inner w-fit">
                {card.label}
              </span>
            </div>

            <div className="text-4xl">{card.icon}</div>
          </div>
        ))}
      </motion.div>
      <Tabs defaultValue="invoices" className="w-full">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TabsList className="bg-[var(--color-orange)] text-[var(--color-white)] shadow-[var(--shadow-two)] px-2 py-1 rounded-lg flex flex-col sm:flex-row w-full sm:w-auto gap-2">
            <TabsTrigger
              value="invoices"
              className="data-[state=active]:bg-[var(--color-red-accent1)] data-[state=active]:text-[var(--color-white)] rounded-md px-3 py-1 text-sm sm:text-base"
            >
              Invoices
            </TabsTrigger>
            <TabsTrigger
              value="payout"
              className="data-[state=active]:bg-[var(--color-bright-blue1)] data-[state=active]:text-[var(--color-white)] rounded-md px-3 py-1 text-sm sm:text-base"
            >
              Payout Methods
            </TabsTrigger>
            <TabsTrigger
              value="factoring"
              className="data-[state=active]:bg-[var(--color-bright-blue1)] data-[state=active]:text-[var(--color-white)] rounded-md px-3 py-1 text-sm sm:text-base"
            >
              Factoring
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select className="border border-[var(--color-text2)] bg-[var(--color-bg2)] text-[var(--color-text1)] rounded-md px-2 py-1 text-sm shadow-[var(--shadow-btn)] w-full sm:w-auto">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
            <button className="flex items-center gap-1 border border-[var(--color-text2)] rounded-md px-3 py-1 text-sm bg-[var(--color-bright-blue2)] text-[var(--color-white)] shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-btn-hover)] w-full sm:w-auto">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </motion.div>
        <TabsContent value="invoices">
          <motion.div
            className="bg-[var(--color-bg2)] rounded-xl border border-[var(--color-text2)] shadow-[var(--shadow-two)] overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="px-4 sm:px-5 py-4 border-b border-[var(--color-text2)]">
              <h2 className="text-base sm:text-lg font-semibold text-[var(--color-white)]">
                Recent Invoices
              </h2>
            </div>
            <Table>
              <TableBody>
                {invoices.map((inv, i) => (
                  <motion.tr
                    key={inv.id}
                    className="hover:bg-[var(--color-bg1)]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <TableCell className="min-w-[200px]">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[var(--color-white)] text-sm sm:text-base">
                            {inv.id}
                          </span>
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full font-medium",
                              inv.status === "Paid" &&
                                "bg-[var(--color-bright-blue2)] text-[var(--color-white)]",
                              inv.status === "Pending" &&
                                "bg-[var(--color-orange)] text-[var(--color-white)]",
                              inv.status === "Overdue" &&
                                "bg-[var(--color-red-accent1)] text-[var(--color-white)]",
                              inv.status === "quick pay" &&
                                "bg-[var(--color-bright-blue1)] text-[var(--color-white)]"
                            )}
                          >
                            {inv.status}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-[var(--color-text2)]">
                          {inv.company} • {inv.route}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right min-w-[120px]">
                      <motion.div
                        className="flex flex-col items-end"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <span className="font-semibold text-[var(--color-white)] text-sm sm:text-base">
                          {inv.amount}
                        </span>
                        <span className="text-xs text-[var(--color-text2)]">
                          Due: {inv.due}
                        </span>
                      </motion.div>
                    </TableCell>

                    <TableCell className="pl-0 min-w-[100px]">
                      {inv.status === "Pending" && (
                        <motion.button
                          className="flex items-center gap-1 border border-[var(--color-red-accent2)] rounded-md px-2 py-1 text-xs sm:text-sm text-[var(--color-white)] bg-[var(--color-red-accent1)] shadow-[var(--shadow-btn)] hover:shadow-[var(--shadow-btn-hover)]"
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Zap className="w-4 h-4" />
                          Quick Pay
                        </motion.button>
                      )}
                    </TableCell>

                    <TableCell className="pl-0 min-w-[50px]">
                      <button className="px-2 py-1 text-lg sm:text-xl text-[var(--color-white)]">
                        ⋯
                      </button>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </TabsContent>
        --- Payout Tab ---
        <TabsContent value="payout">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-bg2)] rounded-xl border border-[var(--color-text2)] shadow-[var(--shadow-two)] p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <h2 className="text-base sm:text-lg font-semibold text-[var(--color-white)]">
                Payout Methods
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-dark)] hover:bg-[var(--color-bright-blue2)] text-[var(--color-white)] px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto"
              >
                + Add Method
              </motion.button>
            </div>

            {/* Business Checking */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--color-text2)] rounded-lg px-4 py-3 mb-4 bg-[var(--color-bg1)]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-bg2)] p-2 rounded-md">🏢</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-white)] font-semibold text-sm sm:text-base">
                      Business Checking
                    </span>
                    <span className="bg-[var(--color-dark)] text-[var(--color-white)] text-xs px-2 py-0.5 rounded-md">
                      Default
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                    ****1234 • 1–2 business days
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                  Fee:{" "}
                  <span className="font-semibold text-[var(--color-white)]">
                    Free
                  </span>
                </p>
                <p className="text-xs text-[var(--color-text2)]">ACH</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-1 border border-[var(--color-text2)] rounded-md text-xs sm:text-sm text-[var(--color-white)] hover:bg-[var(--color-bg2)]"
              >
                Edit
              </motion.button>
            </motion.div>

            {/* Zelle Transfer */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--color-text2)] rounded-lg px-4 py-3 mb-4 bg-[var(--color-bg1)]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-bg2)] p-2 rounded-md">📱</div>
                <div>
                  <p className="text-[var(--color-white)] font-semibold text-sm sm:text-base">
                    Zelle Transfer
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                    john@company.com • Within minutes
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                  Fee:{" "}
                  <span className="font-semibold text-[var(--color-white)]">
                    $2.50
                  </span>
                </p>
                <p className="text-xs text-[var(--color-text2)]">Zelle</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-1 border border-[var(--color-text2)] rounded-md text-xs sm:text-sm text-[var(--color-white)] hover:bg-[var(--color-bg2)]"
              >
                Edit
              </motion.button>
            </motion.div>

            {/* Wire Transfer */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--color-text2)] rounded-lg px-4 py-3 mb-8 bg-[var(--color-bg1)]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-bg2)] p-2 rounded-md">💳</div>
                <div>
                  <p className="text-[var(--color-white)] font-semibold text-sm sm:text-base">
                    Wire Transfer
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                    First National Bank • Same day
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                  Fee:{" "}
                  <span className="font-semibold text-[var(--color-white)]">
                    $25.00
                  </span>
                </p>
                <p className="text-xs text-[var(--color-text2)]">Wire</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-1 border border-[var(--color-text2)] rounded-md text-xs sm:text-sm text-[var(--color-white)] hover:bg-[var(--color-bg2)]"
              >
                Edit
              </motion.button>
            </motion.div>

            {/* Add New Payout Method Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-[var(--color-text2)] rounded-lg p-4 sm:p-6 bg-[var(--color-bg1)]"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[var(--color-white)] mb-4 sm:mb-6">
                Add New Payout Method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Method Type */}
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Method Type
                  </label>
                  <select
                    className="w-full h-12 sm:h-14 px-3 py-2 rounded-md border bg-[var(--color-bg2)] text-[var(--color-text2)] text-sm sm:text-base font-medium focus:outline-none focus:border-[var(--color-bright-blue1)]"
                    value={formData.method}
                    onChange={(e) =>
                      setFormData({ ...formData, method: e.target.value })
                    }
                  >
                    <option>Select method</option>
                    <option>Business Checking</option>
                    <option>Zelle Transfer</option>
                    <option>Wire Transfer</option>
                  </select>
                  {errors.method && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.method}
                    </p>
                  )}
                </div>

                {/* Account Name */}
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Account Name
                  </label>
                  <Input
                    placeholder="Business checking account"
                    value={formData.accountName}
                    onChange={(e) =>
                      setFormData({ ...formData, accountName: e.target.value })
                    }
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                  {errors.accountName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.accountName}
                    </p>
                  )}
                </div>

                {/* Routing Number */}
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Routing Number
                  </label>
                  <Input
                    placeholder="123456789"
                    value={formData.routingNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        routingNumber: e.target.value,
                      })
                    }
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                  {errors.routingNumber && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.routingNumber}
                    </p>
                  )}
                </div>

                {/* Account Number */}
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Account Number
                  </label>
                  <Input
                    placeholder="1234567890"
                    value={formData.accountNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accountNumber: e.target.value,
                      })
                    }
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.accountNumber}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="mt-4 px-4 sm:px-6 py-2 rounded-md text-sm font-semibold bg-[var(--color-dark)] text-white hover:bg-[var(--color-bright-blue2)] w-full sm:w-auto"
              >
                Add Payout Method
              </motion.button>
            </motion.div>
          </motion.div>
        </TabsContent>
        {/* --- Factoring Tab --- */}
        <TabsContent value="factoring">
          <div className="space-y-4 sm:space-y-6">
            {/* Info Alert */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-2 bg-[var(--color-bg2)] text-[var(--color-text2)] border border-[var(--color-text2)] rounded-lg px-4 py-3"
            >
              <span className="text-lg sm:text-xl">ℹ️</span>
              <p className="text-xs sm:text-sm">
                Factoring allows you to get paid immediately by selling your
                invoices to a third party at a discount.
              </p>
            </motion.div>

            {/* Factoring Partners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-[var(--color-text2)] rounded-xl bg-[var(--color-bg1)] p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                <h2 className="text-base sm:text-lg font-semibold text-[var(--color-white)]">
                  Factoring Partners
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--color-dark)] hover:bg-[var(--color-bright-blue2)] text-[var(--color-white)] px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto"
                >
                  + Add Partner
                </motion.button>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--color-text2)] rounded-lg px-4 py-3 mb-4 bg-[var(--color-bg2)]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[var(--color-bg1)] p-2 rounded-md">🏦</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-white)] font-semibold text-sm sm:text-base">
                        FactorMax
                      </span>
                      <span className="bg-[var(--color-dark)] text-[var(--color-white)] text-xs px-2 py-0.5 rounded-md">
                        Active
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                      Same day funding • 2.5% fee
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-1 border border-[var(--color-text2)] rounded-md text-xs sm:text-sm text-[var(--color-white)] hover:bg-[var(--color-bg1)]"
                >
                  Manage
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--color-text2)] rounded-lg px-4 py-3 mb-4 bg-[var(--color-bg2)]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[var(--color-bg1)] p-2 rounded-md">💰</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-white)] font-semibold text-sm sm:text-base">
                        QuickCash Factoring
                      </span>
                      <span className="bg-white text-black text-xs px-2 py-0.5 rounded-md">
                        Inactive
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-text2)]">
                      24-hour funding • 3.2% fee
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-2 sm:mt-0 ml-0 sm:ml-4 px-4 py-1 border border-[var(--color-text2)] rounded-md text-xs sm:text-sm text-[var(--color-white)] hover:bg-[var(--color-bg1)]"
                >
                  Activate
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Factoring Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-[var(--color-text2)] rounded-xl bg-[var(--color-bg1)] p-4 sm:p-6"
            >
              <h2 className="text-base sm:text-lg font-semibold text-[var(--color-white)] mb-4">
                Factoring Calculator
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Invoice Amount
                  </label>
                  <Input
                    placeholder="$1,000"
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    Factor Rate
                  </label>
                  <Input
                    placeholder="2.5%"
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs sm:text-sm font-semibold text-[var(--color-white)]">
                    You'll Receive
                  </label>
                  <Input
                    placeholder="$975"
                    disabled
                    className="h-12 sm:h-14 text-sm sm:text-base"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-4 sm:px-6 py-2 rounded-md text-sm font-semibold bg-[var(--color-dark)] text-white hover:bg-[var(--color-bright-blue2)] w-full sm:w-auto"
              >
                Calculate Factoring
              </motion.button>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
