import type * as React from 'react';
export interface ResearchHeaderProps { kicker?: string; headline: React.ReactNode; subhead?: string; logoSrc?: string; children?: React.ReactNode; className?: string }
export declare function ResearchHeader(props: ResearchHeaderProps): React.ReactElement;
export interface PanelProps { title?: string; subtitle?: string; children?: React.ReactNode; className?: string }
export declare function Panel(props: PanelProps): React.ReactElement;
export interface StepCardProps { n: number | string; title: string; children?: React.ReactNode }
export declare function StepCard(props: StepCardProps): React.ReactElement;
export interface Bar { label: string; value: number; display?: string; sub?: string; meta?: string; highlight?: boolean; tone?: 'signal' | 'tint' | 'loss' | 'caution' }
export interface BarChartProps { bars: Bar[]; max?: number; height?: number }
export declare function BarChart(props: BarChartProps): React.ReactElement;
export interface StatProps { value: string; label: string; note?: string; tone?: 'signal' | 'loss' }
export declare function Stat(props: StatProps): React.ReactElement;
export interface TagProps { tone?: 'neutral' | 'signal' | 'loss' | 'caution'; children?: React.ReactNode }
export declare function Tag(props: TagProps): React.ReactElement;
export interface SourceFooterProps { source?: string; note?: string; handle?: string; logoSrc?: string }
export declare function SourceFooter(props: SourceFooterProps): React.ReactElement;
export interface StickerProps { size?: 'md' | 'lg'; children?: React.ReactNode }
export declare function Sticker(props: StickerProps): React.ReactElement;
declare global { interface Window { EVPlus: { ResearchHeader: typeof ResearchHeader; Panel: typeof Panel; StepCard: typeof StepCard; BarChart: typeof BarChart; Stat: typeof Stat; Tag: typeof Tag; SourceFooter: typeof SourceFooter; Sticker: typeof Sticker } } }
