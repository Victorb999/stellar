"use client";
// @ts-nocheck

import { useState } from "react";
// @ts-ignore
import { Card, Heading, Text, Button, StatusTag } from "cyberneon";
import type { Body } from "@/lib/api";

interface BodyListProps {
    displayBodies: Body[];
}

export default function BodyList({ displayBodies }: BodyListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(displayBodies.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBodies = displayBodies.slice(startIndex, startIndex + itemsPerPage);

    const getMoonsCount = (moons: { moon: string; rel: string }[] | null) => {
        if (!moons) return 0;
        return moons.length;
    };

    return (
        <div className="flex flex-col gap-6 w-full">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {currentBodies.map(body => (
                    <div key={body.id} className="hover:scale-[1.02] transition-transform duration-200">
                        <Card >
                            <div className="flex flex-col justify-between p-4 border border-neutral-800 bg-neutral-900 rounded-none relative overflow-hidden group h-full">
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex flex-col">
                                            <Heading level="h4" intent={body.isPlanet ? "primary" : "secondary"} className={body.isPlanet ? "text-magenta-400" : "text-yellow-400"}>
                                                {body.englishName}
                                            </Heading>
                                            {body.alternativeName && (
                                                <Text variant="caption" intent="muted" className="font-mono text-[10px] text-cyan-500/70 truncate max-w-[120px]">
                                                    ALT: {body.alternativeName}
                                                </Text>
                                            )}
                                        </div>
                                        {/* Using StatusTag as a label for type */}
                                        <div className="scale-75 origin-top-right">
                                            <StatusTag intent={body.isPlanet ? "primary" : "default"} label={body.bodyType} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-1 text-xs font-mono text-neutral-400 flex-grow">
                                        <div className="flex flex-col border border-neutral-800 p-1.5 bg-neutral-950/50">
                                            <span className="text-[9px] text-neutral-500 mb-0.5 tracking-wider uppercase">Gravity</span>
                                            <span className="text-cyan-400 font-medium">{body.gravity || 0} m/s²</span>
                                        </div>
                                        <div className="flex flex-col border border-neutral-800 p-1.5 bg-neutral-950/50">
                                            <span className="text-[9px] text-neutral-500 mb-0.5 tracking-wider uppercase">Density</span>
                                            <span className="text-magenta-400 font-medium">{body.density || 0} g/cm³</span>
                                        </div>
                                        <div className="flex flex-col border border-neutral-800 p-1.5 bg-neutral-950/50">
                                            <span className="text-[9px] text-neutral-500 mb-0.5 tracking-wider uppercase">Moons</span>
                                            <span className="text-yellow-400 font-medium">{getMoonsCount(body.moons)}</span>
                                        </div>
                                        <div className="flex flex-col border border-neutral-800 p-1.5 bg-neutral-950/50">
                                            <span className="text-[9px] text-neutral-500 mb-0.5 tracking-wider uppercase">Major Axis</span>
                                            <span className="text-neutral-300 font-medium truncate">{body.semimajorAxis ? `${(body.semimajorAxis / 1000).toLocaleString()} km` : "N/A"}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col border-t border-neutral-800 pt-2 mt-3 text-[10px] font-mono">
                                    <div className="flex justify-between items-center text-neutral-500">
                                        <span className="uppercase">Discovery</span>
                                        <span className="text-neutral-400 font-medium text-right truncate max-w-[120px]" title={body.discoveredBy || ""}>
                                            {body.discoveredBy || "UNKNOWN"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-neutral-500 mt-1">
                                        <span className="uppercase">Date</span>
                                        <span className="text-cyan-400 font-medium">
                                            {body.discoveryDate || "UNKNOWN"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </section>

            {totalPages > 1 && (
                <div className="flex justify-between items-center px-4 py-3 border border-neutral-800 bg-neutral-900 relative mt-2">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-magenta-500"></div>

                    <Button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        className="cursor-pointer font-mono px-4 py-1"
                        variant="primary"
                    >
                        &lt; PREV
                    </Button>

                    <Text variant="mono" intent="muted" className="tracking-widest text-xs">
                        PAGE {currentPage} / {totalPages}
                    </Text>

                    <Button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className="cursor-pointer font-mono border-cyan-500 text-cyan-400 px-4 py-1"
                        variant="primary"
                    >
                        NEXT &gt;
                    </Button>
                </div>
            )}
        </div>
    );
}
